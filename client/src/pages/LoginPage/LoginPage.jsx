import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as api from "../../api/auth";
import { setUserSignedIn } from "../../utils/index";
import { Formik, Form } from "formik";
import { Link, Redirect } from "react-router-dom";
import { useSnackbar } from "notistack";
import Collapse from "@material-ui/core/Collapse";
import { setSignIn } from "../../redux/actions/authActions";

const useStyles = makeStyles({
    form: {},
    heading: {
        textAlign: "center",
        margin: "25px auto",
    },
    card: {
        padding: "20px",
        width: "400px",
    },
    grid: {
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundImage: "url('https://uttar1.herokuapp.com/img/undraw_Faq_re_31cw.svg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    },
    brand: {
        textAlign: "center",
        fontFamily: "'Rock Salt', cursive",
        color: "text-primary",
    },
});

const LoginPage = () => {
    const classes = useStyles();
    const [signedIn, setSignedIn] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const loginFormHandler = async (values) => {
        try {
            const res = await api.executeLogin(values);
            if (!res.data.token) {
                throw new Error();
            }
            setUserSignedIn(res.data.token); // sets auth_token in local storage
            setSignedIn(true);
            dispatch(setSignIn(res.data));

            // storing user in local storage
            localStorage.setItem("user", res.data.user);

            enqueueSnackbar("Login successfull", {
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                TransitionComponent: Collapse,
                variant: "success",
            });
        } catch (err) {
            enqueueSnackbar("Some error occured", {
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                TransitionComponent: Collapse,
                variant: "error",
            });
        }
    };

    if (signedIn) {
        return (
            <div>
                Loggedin
                <Redirect to="/" />
            </div>
        );
    } else {
        return (
            <div>
                <Grid my={"auto"} className={classes.grid}>
                    <Card className={classes.card} variant="outlined">
                        <h2 className={classes.brand}>Uttar</h2>

                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                loginFormHandler(values);
                                setSubmitting(false);
                            }}
                        >
                            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                <Form>
                                    <h3 className={classes.heading}>Login Here</h3>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        style={{ margin: "12px auto" }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        style={{ margin: "12px auto" }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        <Button
                                            type="submit"
                                            style={{ margin: "12px auto" }}
                                            variant="contained"
                                            color="primary"
                                        >
                                            Submit
                                        </Button>
                                    </p>
                                </Form>
                            )}
                        </Formik>

                        <p
                            style={{
                                textAlign: "center",
                                textDecoration: "underline",
                                color: "color-secondary",
                                marginTop: "10px",
                                marginBottom: "20px",
                            }}
                        >
                            <Link to="/signup"> Don't have an account? Sign up</Link>
                        </p>
                    </Card>
                </Grid>
            </div>
        );
    }
};

export default LoginPage;
