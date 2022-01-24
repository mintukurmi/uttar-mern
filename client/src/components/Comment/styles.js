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
});

export default useStyles;
