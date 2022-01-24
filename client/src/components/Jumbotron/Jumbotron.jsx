import useStyles from "./styles";
import Box from "@material-ui/core/Box";
import SearchBox from "../SearchBox/SearchBox";
import { Typography } from "@material-ui/core";

const Jumbotron = ({ handler }) => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.box}>
                <div>
                    <Typography variant="h4" className={classes.headline}>
                        Get All Your Questions Answered
                    </Typography>

                    <Typography variant="body1">A Question and Answer Platform for All</Typography>
                    <SearchBox handler={handler} />
                </div>
            </Box>
        </div>
    );
};

export default Jumbotron;
