import {
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button,
    IconButton,
    Avatar,
    Typography,
} from "@material-ui/core";
import { AccessTimeOutlined, ThumbUpAltOutlined, VisibilityOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import useStyles from "./styles";

const Comment = ({ comment }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                avatar={<Avatar alt="" src={comment?.author?.avatar?.url} />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={comment?.author?.usermeta?.name}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {comment?.comment}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <ThumbUpAltOutlined style={{ fontSize: "17px" }} />
                </IconButton>
                <Typography style={{ fontSize: "13px" }} variant="subtitle1" component="p">
                    200 Likes
                </Typography>
                <AccessTimeOutlined style={{ fontSize: "17px", marginLeft: "20px" }} />
                <Typography
                    style={{ fontSize: "13px", marginLeft: "5px" }}
                    variant="subtitle1"
                    component="p"
                >
                    {moment(comment?.createdAt).fromNow()} time
                </Typography>
                <VisibilityOutlined style={{ fontSize: "17px", marginLeft: "20px" }} />
                <Typography
                    style={{ fontSize: "13px", marginLeft: "5px" }}
                    variant="subtitle1"
                    component="p"
                >
                    100 views
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Comment;
