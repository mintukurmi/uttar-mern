import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    textField: {
        marginTop: "35px",
        color: "#495057",
        backgroundColor: "#fff",
        border: "1px solid #ced4da",
        borderRadius: "3px",
        lineHeight: "1.2 em",
        width: "300px",
        padding: "",
        height: "33px",
        paddingLeft: "8px",
        paddingRight: "8px",
    },
    button: {
        backgroundColor: "#dc3545",
        border: 0,
        borderRadius: 3,
        color: "white",
        height: 38,
        padding: "0 30px",
        marginTop: "10px",
        "&:hover": {
            backgroundColor: "#BD2130 ",
            color: "#fff",
        },
    },
});

export default useStyles;
