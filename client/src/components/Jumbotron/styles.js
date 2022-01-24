import { makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";

const useStyles = makeStyles({
    box: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "400px",
        backgroundColor: "#30303A",
        color: "#fff",
        backgroundImage: "url('https://uttar1.herokuapp.com/img/undraw_Faq_re_31cw.svg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
    },
    headline: {
        color: theme.palette.danger.main,
    },
});

export default useStyles;
