import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    headerLink: {
        display: "inline-block !important",
        width: "auto",
    },
    avatar: {
        width: "32px",
        height: "32px",
    },
    root: {
        display: "flex",
    },
    paper: {
        marginRight: 2,
    },
    nav: {},
    navlink: {
        color: "#fff",
        paddingRight: "15px",
        textDecoration: "none",
    },
    navbar: {
        backgroundColor: "#252527",
        paddingTop: 10,
        paddingBottom: 10,
        color: "#fff",
    },
    wrapper: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    navbar_brand: {
        textAlign: "center",
        fontFamily: "Rock Salt, cursive",
        color: "text-primary",
    },
});

export default useStyles;
