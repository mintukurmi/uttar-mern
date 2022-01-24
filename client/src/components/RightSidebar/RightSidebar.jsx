import PostQuestion from "../PostQuestion/PostQuestion";
import CategoryList from "../CategoryList/CategoryList";
import QuestionList from "../QuestionList/QuestionList";
import { Card, Typography } from "@material-ui/core";

const RightSidebar = ({ posts, categories }) => {
    return (
        <div>
            <PostQuestion />
            <Card style={{ margin: "50px auto" }}>
                <Typography variant="h6" align="center">
                    Categories
                </Typography>
                <CategoryList categories={categories} />
            </Card>
            <QuestionList posts={posts} />
        </div>
    );
};

export default RightSidebar;
