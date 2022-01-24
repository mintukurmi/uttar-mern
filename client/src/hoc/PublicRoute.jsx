import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserSignedIn } from "../utils/index";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isUserSignedIn() && restricted ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};

export default PublicRoute;
