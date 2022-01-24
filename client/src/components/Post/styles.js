import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);",
        marginTop: "18px",
    },
    avatar: {
        width: "30px",
        height: "30px",
    },
    cardHeader: {
        borderBottom: "1px solid silver",
        padding: "10px",
    },
    categories: {
        margin: "10px 30px",
    },
    toolbarIcon: {
        width: "2px",
        height: "auto",
    },
    cardActionArea: {
        color: "transparent !important",
    },
    wrapper_2: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "3px",
        alignItems: "center",
        marginRight: "10px",
    },
});

export default useStyles;
