import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography> &copy; 2022 - All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
