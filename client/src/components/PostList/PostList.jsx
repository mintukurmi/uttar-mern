import Post from "../Post/Post";
import CssLoader from "../CssLoader/CssLoader";
import { getUserId } from "../../utils";

const PostList = ({ posts, handleLike, callback }) => {
    const user = getUserId();

    if (posts?.length < 1) {
        return <CssLoader />;
    } else {
        return (
            <div>
                {posts?.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            id={post?._id}
                            post={post}
                            user={user}
                            handleLike={handleLike}
                            callback={callback}
                        />
                    );
                })}
            </div>
        );
    }
};

export default PostList;
