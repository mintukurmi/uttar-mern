import Box from "@material-ui/core/Box";
import { Avatar, Button, Typography } from "@material-ui/core";
import { Paper, Popper, MenuList, MenuItem, ClickAwayListener, Grow } from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { getUserId, removeUserSignedIn } from "../../utils/index";
import Collapse from "@material-ui/core/Collapse";
import { useSnackbar } from "notistack";
import * as api from "../../api/user";
import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [isLogout, setIsLogout] = React.useState(false);
    const anchorRef = React.useRef(null);
    const { enqueueSnackbar } = useSnackbar();

    const userId = getUserId();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleLogout = () => {
        removeUserSignedIn();
        setIsLogout(true);
        setOpen(false);
        enqueueSnackbar("Logout successful", {
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
            TransitionComponent: Collapse,
        });
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }
    // gets user from db
    const getUserById = async () => {
        try {
            const res = await api.fetchUserbyId(userId);
            setUser(res.data.user);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUserById();
    }, []);

    if (isLogout) {
        return <Redirect to="/" />;
    }

    return (
        <div className={classes.navbar}>
            <Box className={classes.wrapper}>
                {/* <!-- Brand --> */}
                <Typography variant="h5" className={classes.navbar_brand}>
                    Uttar
                </Typography>
                {/* <!-- nav links --> */}
                <Typography className={classes.nav}>
                    <Link className={classes.navlink} to="/">
                        Home
                    </Link>
                    <Link className={classes.navlink} to="/posts" color="#fff">
                        Posts
                    </Link>
                    <Link className={classes.navlink} to="/" variant="body2">
                        Contact
                    </Link>
                </Typography>
                {/* <!-- Profile --> */}
                <div className={classes.root}>
                    <div>
                        <Button onClick={handleToggle}>
                            <Avatar
                                className={classes.avatar}
                                alt="Profile"
                                src="https://res.cloudinary.com/tremedy/image/upload/c_scale,w_90/v1582207349/avatars/man_2_lvablz.png"
                            />
                            <ArrowDropDownOutlinedIcon style={{ color: "#fff" }} />
                        </Button>
                        <div style={{ position: "absolute" }}>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                                style={{ position: "absolute" }}
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === "bottom"
                                                    ? "center top"
                                                    : "center bottom",
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="menu-list-grow"
                                                    onKeyDown={handleListKeyDown}
                                                >
                                                    <MenuItem onClick={handleClose}>
                                                        Hi, {user?.usermeta?.name?.split(" ")[0]}
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        Profile
                                                    </MenuItem>
                                                    <MenuItem onClick={handleLogout}>
                                                        Logout
                                                    </MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Header;
