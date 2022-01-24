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
        borderBottom: "1px solid #e9e9e9",
        padding: "10px",
    },
    categories: {
        margin: "10px 20px",
    },
    toolbarIcon: {
        width: "2px",
        height: "auto",
    },
    cardActionArea: {
        color: "transparent !important",
    },
    editor: {
        backgroundColor: "silver",
    },
    commentBox: {
        display: "block",
        width: "100%",
    },
});

export default useStyles;
