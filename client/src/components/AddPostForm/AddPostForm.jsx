import { Button, Grid, TextField, Chip } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Formik } from "formik";
import Input from "@material-ui/core/Input";
import React from "react";
import { useEffect, useState } from "react";
import * as api from "../../api/post";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../redux/actions/postActions";
import Collapse from "@material-ui/core/Collapse";
import { useSnackbar } from "notistack";
import { Redirect } from "react-router-dom";
import { fetchPostById } from "../../redux/actions/postActions";
import useStyles from "./style";

const AddPostForm = ({ handleClose }) => {
    const classes = useStyles();

    const [category, setCategory] = useState([]);
    const [postCreated, setPostCreated] = useState();

    const { enqueueSnackbar } = useSnackbar();

    const categories = useSelector((state) => state.posts.categories);
    const dispatch = useDispatch();

    const handleMultipleChange = (event) => {
        setCategory(event.target.value);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const NewPostHandler = async (values) => {
        try {
            const { data } = await api.createNewPost(values);
            setPostCreated(data.post);
            enqueueSnackbar("Post created successfully", {
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                },
                TransitionComponent: Collapse,
                variant: "success",
            });
            handleClose();
            dispatch(fetchPostById(data.post));
        } catch (err) {
            console.log(err);
        }
    };

    const getAllCategories = async () => {
        try {
            const res = await api.fetchAllCategories();
            dispatch(fetchAllCategories(res.data.categories));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    if (postCreated) {
        return <Redirect to={"/post/" + postCreated._id} />;
    } else {
        return (
            <div>
                <Formik
                    initialValues={{ title: "", body: "", category: [] }}
                    onSubmit={(values, { setSubmitting }) => {
                        NewPostHandler(values);
                    }}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" justifyContent="center">
                                <Grid item>
                                    <TextField
                                        className={classes.textField}
                                        variant="outlined"
                                        label="Title"
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        fullWidth
                                        required
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        className={classes.textField}
                                        variant="outlined"
                                        label="Description"
                                        name="description"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        fullWidth
                                        multiline
                                        minRows={5}
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label">Categories</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="category"
                                    name="categories"
                                    multiple
                                    required
                                    value={category}
                                    onBlur={handleChange}
                                    onChange={handleMultipleChange}
                                    input={<Input id="category" name="category" />}
                                    renderValue={(selected) => {
                                        return (
                                            <div className={classes.chips}>
                                                {selected.map((value) => {
                                                    let obj = categories.find(
                                                        (cat) => cat._id === value
                                                    );
                                                    return (
                                                        <Chip
                                                            key={obj.name}
                                                            label={obj.name}
                                                            className={classes.chip}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        );
                                    }}
                                    MenuProps={MenuProps}
                                >
                                    {categories?.map(({ _id, name }) => (
                                        <MenuItem key={name} value={_id}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                style={{ margin: "150x auto" }}
                            >
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
};

export default AddPostForm;
