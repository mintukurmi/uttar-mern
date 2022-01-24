import { Container, Grid } from "@material-ui/core";
import useStyles from "./styles";

const MainContentContainer = ({ content, sidebar }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    {content}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {sidebar}
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainContentContainer;
