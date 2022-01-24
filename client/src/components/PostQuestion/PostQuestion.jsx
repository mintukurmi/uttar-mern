import { Box, Button, Grid, Typography } from "@material-ui/core";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import { React, useState } from "react";
import useStyles from "./styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

import AddPostForm from "../AddPostForm/AddPostForm";

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const PostQuestion = () => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Button
                    onClick={handleOpen}
                    color="primary"
                    variant="contained"
                    align="center"
                    fullWidth
                    startIcon={<PostAddOutlinedIcon />}
                >
                    <Typography align="center">Post a Question ?</Typography>
                </Button>
                <Modal open={open} onClose={handleClose}>
                    <Box style={modalStyle} className={classes.card}>
                        <div className={classes.modalHeader}>
                            <Typography variant="h6">Create a Post</Typography>
                            <Button onClick={handleClose}>
                                <CloseIcon />
                            </Button>
                        </div>
                        <div>
                            <AddPostForm handleClose={handleClose} />
                        </div>
                    </Box>
                </Modal>
            </Grid>
        </Grid>
    );
};

export default PostQuestion;
