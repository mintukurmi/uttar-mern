import { Card, CardContent, CardHeader, CardActions, Button } from "@material-ui/core";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, Typography, TextField } from "@material-ui/core";
import { AccessTimeOutlined, VisibilityOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ReplyIcon from "@material-ui/icons/Reply";
import { React } from "react";
import { useRef } from "react";
import moment from "moment";
import CategoryList from "../CategoryList/CategoryList";
import { Formik, Form } from "formik";
import CommentList from "../CommentList/CommentList";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import useStyles from "./styles";
import { getPostById } from "../../utils/apiHandler";

const SinglePost = ({ id, post, likeHandler, commentHandler }) => {
    const classes = useStyles();
    const user = localStorage.getItem("user");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const focusOnBtnClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                        <Avatar
                            alt={post?.author?.usermeta?.name}
                            src={post?.author?.avatar?.url}
                        />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post?.author?.usermeta?.name}
                />
                <Box className={classes.categories}>
                    <CategoryList categories={post?.categories} />
                </Box>

                <CardContent>
                    <Typography variant="h6" color="textPrimary" component="h2">
                        {post?.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post?.description}
                    </Typography>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "3px",
                            alignItems: "center",
                            marginRight: "10px",
                        }}
                    ></Box>
                    <Button
                        variant="outlined"
                        color="secondary"
                        style={{ margin: "25px" }}
                        startIcon={<BorderColorIcon />}
                        onClick={focusOnBtnClick}
                    >
                        Add comment
                    </Button>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        aria-label="share"
                        onClick={() => likeHandler(id, dispatch, getPostById)}
                    >
                        {(() =>
                            post?.likes?.liked_by.includes(user) ? (
                                <ThumbUpAltIcon color="primary" style={{ fontSize: "20px" }} />
                            ) : (
                                <ThumbUpAltOutlined style={{ fontSize: "20px" }} />
                            ))()}
                    </IconButton>
                    <Typography style={{ fontSize: "13px" }} variant="subtitle1" component="p">
                        {post?.likes?.liked_by.length} Likes
                    </Typography>
                    <AccessTimeOutlined style={{ fontSize: "17px", marginLeft: "20px" }} />
                    <Typography
                        style={{ fontSize: "13px", marginLeft: "5px" }}
                        variant="subtitle1"
                        component="p"
                    >
                        {moment(post?.createdAt).fromNow()}
                    </Typography>
                    <VisibilityOutlined style={{ fontSize: "17px", marginLeft: "20px" }} />
                    <Typography
                        style={{ fontSize: "13px", marginLeft: "5px" }}
                        variant="subtitle1"
                        component="p"
                    >
                        {post?.views?.viewers.length} views
                    </Typography>
                </CardActions>
            </Card>

            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={<ReplyIcon />}
                    title="Replying to: "
                    subheader={post?.title}
                />
                <CardContent>
                    <Formik
                        initialValues={{
                            comment: "",
                            id: id,
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            commentHandler(values, dispatch, enqueueSnackbar);
                            resetForm({});
                        }}
                    >
                        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form>
                                <TextField
                                    id="comment"
                                    label="Comment"
                                    name="comment"
                                    multiline
                                    rows={5}
                                    placeholder="Start typing some text..."
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    inputRef={inputRef}
                                    value={values.comment || ""}
                                />
                                <Button
                                    style={{ marginTop: "15px" }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>

            <div style={{ marginTop: "20px" }}>
                <CommentList comments={post?.comments} />
            </div>
        </div>
    );
};

export default SinglePost;
