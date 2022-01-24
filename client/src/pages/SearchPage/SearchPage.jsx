import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MainContentContainer from "../../containers/MainContentContainer";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import PostList from "../../components/PostList/PostList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getRandomPosts,
    getSearchResults,
    getCategories,
    handleLikeBtn,
} from "../../utils/apiHandler";

const SearchPage = () => {
    const { string } = useParams();
    const [posts, setPosts] = useState([]);
    const [questionList, setQuestionList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getSearchResults(string, setPosts);
        getRandomPosts(setQuestionList);
        getCategories(setCategories);
    }, [string]);

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <MainContentContainer
                content={
                    <PostList
                        posts={posts}
                        handleLike={handleLikeBtn}
                        callback={getSearchResults}
                    />
                }
                sidebar={<RightSidebar posts={questionList} categories={categories} />}
            />
            <Footer />
        </div>
    );
};

export default SearchPage;
