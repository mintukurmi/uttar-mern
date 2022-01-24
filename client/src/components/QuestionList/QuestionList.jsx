import { Card, Typography, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import "./style.css";

const QuestionList = ({ posts }) => {
    const classes = useStyles();

    return (
        <Card>
            <div style={{ marginBottom: "20px" }}>
                <Typography variant="h6" align="center">
                    {" "}
                    Can You Answer ?
                </Typography>
                <List style={{ margin: "auto 20px" }}>
                    {posts.length === 0 ? (
                        <div>
                            <ListItem className="comment br animate w80"></ListItem>
                            <ListItem className="comment br animate w80"></ListItem>
                            <ListItem className="comment br animate w80"></ListItem>
                            <ListItem className="comment br animate w80"></ListItem>
                            <ListItem className="comment br animate w80"></ListItem>
                        </div>
                    ) : (
                        ""
                    )}

                    {posts?.map((post, index) => {
                        return (
                            <ListItem key={index} style={{ marginLeft: "10px" }}>
                                <Link className={classes.link} to={"/post/" + post._id}>
                                    {post.title}
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </Card>
    );
};

export default QuestionList;
