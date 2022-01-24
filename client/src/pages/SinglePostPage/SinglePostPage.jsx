import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MainContentContainer from "../../containers/MainContentContainer";
import SinglePost from "../../components/SinglePost/SinglePost";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    getRandomPosts,
    getPostById,
    handleLikeBtn,
    commentFormHandler,
    getCategories,
} from "../../utils/apiHandler";

const SinglePostPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [questionList, setQuestionList] = useState([]);
    const post = useSelector((state) => state.posts.selectedPost);
    const [categories, setCategories] = useState();

    useEffect(() => {
        getPostById(id, dispatch);
        getRandomPosts(setQuestionList);
        getCategories(setCategories);
    }, [id]);

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <MainContentContainer
                content={
                    <SinglePost
                        id={id}
                        post={post}
                        likeHandler={handleLikeBtn}
                        commentHandler={commentFormHandler}
                    />
                }
                sidebar={<RightSidebar categories={categories} posts={questionList} />}
            />
            <Footer />
        </div>
    );
};

export default SinglePostPage;
