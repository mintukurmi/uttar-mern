import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import App from "./App";
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
            <App />
        </SnackbarProvider>
    </Provider>,
    document.getElementById("root")
);
