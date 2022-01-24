import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import * as api from "../../api/auth";
import { Formik, Form } from "formik";
import { Redirect } from "react-router-dom";

import Collapse from "@material-ui/core/Collapse";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

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
    alert: {
        width: "100%",
        "& > * + *": {
            marginTop: 2,
        },
    },
});

const SignupPage = () => {
    const classes = useStyles();
    const [signedUp, setSignedUp] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const signupFormHandler = async (values) => {
        try {
            await api.executeSignup(values);
            setSignedUp(true);
            enqueueSnackbar("Account created successfully", {
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

    console.log(signedUp);

    if (signedUp) {
        return <Redirect to="/login" />;
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
                                confirmPassword: "",
                                name: "",
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                signupFormHandler(values);
                                setSubmitting(false);
                            }}
                        >
                            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                <Form>
                                    <h3 className={classes.heading}>Create an account</h3>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        style={{ margin: "12px auto" }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                    />
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        style={{ margin: "12px auto" }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="email"
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
                                    <TextField
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        label="Confirm Password"
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
                                marginTop: "5px",
                                marginBottom: "20px",
                            }}
                        >
                            <Link to="/login"> Have an account? Login Now</Link>
                        </p>
                    </Card>
                </Grid>
            </div>
        );
    }
};

export default SignupPage;
