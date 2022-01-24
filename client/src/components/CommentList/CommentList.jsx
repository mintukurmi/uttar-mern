import Comment from "../Comment/Comment";
import { forwardRef } from "react";
import { Typography } from "@material-ui/core";

const CommentList = forwardRef(({ comments }, ref) => {
    return (
        <div uef={ref}>
            {comments?.length !== 0 ? (
                <Typography variant="h6">Previous comments</Typography>
            ) : (
                <div></div>
            )}

            {comments?.map((comment, index) => {
                return <Comment key={index} comment={comments[comments.length - 1 - index]} />;
            })}
        </div>
    );
});

export default CommentList;
