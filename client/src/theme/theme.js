import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#007bff",
        },
        secondary: {
            main: "#DC3545",
        },
        danger: {
            main: "#dc3545",
        },
    },
    overrides: {
        MuiTextField: {
            root: {},
        },
        MuiButton: {
            root: {},
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
