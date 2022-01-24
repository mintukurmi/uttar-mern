import { Card } from "@material-ui/core";
import { CardHeader, CardContent, CardActionArea, Typography, Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActions from "@material-ui/core/CardActions";
import { AccessTimeOutlined, VisibilityOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import * as api from "../../api/post";
import CategoryList from "../../components/CategoryList/CategoryList";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const Post = ({ id, post, user, handleLike, callback }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                avatar={<Avatar alt={post.author.usermeta.name} src={post.author.avatar.url} />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.author.usermeta.name}
            />
            <CardActionArea href={"/post/" + post._id} className={classes.cardActionArea}>
                <div style={{ marginLeft: "10px" }}>
                    <CategoryList categories={post.categories} />
                </div>

                <CardContent>
                    <Typography variant="h6" color="textPrimary" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.description}
                    </Typography>
                    <Box className={classes.wrapper_2}>
                        <CommentOutlinedIcon
                            align="right"
                            style={{ fontSize: "17px", color: "#000" }}
                        />
                        <Typography
                            style={{ fontSize: "13px", marginLeft: "5px", color: "#000" }}
                            variant="subtitle1"
                            component="p"
                        >
                            {post.comments.length} comments
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="share" onClick={() => handleLike(id, dispatch, callback)}>
                    {(() =>
                        post?.likes?.liked_by.includes(user) ? (
                            <ThumbUpAltIcon color="primary" style={{ fontSize: "20px" }} />
                        ) : (
                            <ThumbUpAltOutlined style={{ fontSize: "20px" }} />
                        ))()}
                </IconButton>
                <Typography style={{ fontSize: "13px" }} variant="subtitle1" component="p">
                    {post.likes.liked_by.length} Likes
                </Typography>
                <AccessTimeOutlined style={{ fontSize: "17px", marginLeft: "20px" }} />
                <Typography
                    style={{ fontSize: "13px", marginLeft: "5px" }}
                    variant="subtitle1"
                    component="p"
                >
                    {moment(post.createdAt).fromNow()}
                </Typography>
                <VisibilityOutlined style={{ fontSize: "17px", marginLeft: "20px" }} />
                <Typography
                    style={{ fontSize: "13px", marginLeft: "5px" }}
                    variant="subtitle1"
                    component="p"
                >
                    {post.views.viewers.length} views
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Post;
