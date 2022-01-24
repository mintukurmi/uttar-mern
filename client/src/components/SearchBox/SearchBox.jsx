import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import useStyles from "./styles";

const SearchBox = () => {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("");

    return (
        <div>
            {searchText ? <Redirect to={"/search/" + searchText} /> : ""}
            <Formik
                initialValues={{
                    searchText: "",
                }}
                onSubmit={(values) => {
                    // window.location.href = "/search/" + encodeURIComponent(values.searchText);
                    setSearchText(encodeURIComponent(values.searchText));
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <p>
                            <Field
                                id="searchText"
                                type="text"
                                name="searchText"
                                className={classes.textField}
                                placeholder="Start by typing..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </p>
                        <p>
                            <Button type="submit" className={classes.button} variant="contained">
                                Search
                            </Button>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default SearchBox;
