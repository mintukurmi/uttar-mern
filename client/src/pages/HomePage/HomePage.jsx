import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MainContentContainer from "../../containers/MainContentContainer";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import PostList from "../../components/PostList/PostList";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getCategories,
    getRandomPosts,
    getAllLatestPosts,
    handleLikeBtn,
} from "../../utils/apiHandler";

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.latestPosts);
    const [questionList, setQuestionList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllLatestPosts(null, dispatch);
        getRandomPosts(setQuestionList);
        getCategories(setCategories);
    }, []);

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <MainContentContainer
                content={
                    <PostList
                        posts={posts}
                        handleLike={handleLikeBtn}
                        callback={getAllLatestPosts}
                    />
                }
                sidebar={<RightSidebar posts={questionList} categories={categories} />}
            />
            <Footer />
        </div>
    );
};

export default HomePage;
