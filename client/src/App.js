import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import PublicRoute from "./hoc/PublicRoute";
import PrivateRoute from "./hoc/PrivateRoute";
import SignupPage from "./pages/SignupPage/SignupPage";
import theme from "./theme/theme";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Switch>
                    <PrivateRoute component={HomePage} path="/" exact />
                    <PublicRoute restricted={true} component={LoginPage} path="/login" exact />
                    <PublicRoute restricted={true} component={SignupPage} path="/signup" exact />
                    <PrivateRoute component={SinglePostPage} path="/post/:id" exact />
                    <PrivateRoute component={SearchPage} path="/search/:string" exact />
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
