import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        position: "absolute",
        width: 550,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2),
    },
    card: {
        position: "absolute",
        width: 550,
        background: "#fff",
        borderRadius: "2px",
        display: "inline-block",
        height: "auto",
        margin: "1rem",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
        padding: theme.spacing(3, 3, 3),
    },
    modalHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

export default useStyles;
