import React from "react";

import logo from "../assets/img/logo.png";
import "../assets/style/home/home.css";

import SmsIcon from "@material-ui/icons/Sms";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputBase,
  List,
  Menu,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClearIcon from "@material-ui/icons/Clear";
import isLogged from "../assets/config/isLogged.js";

import style from "../assets/style/home/home.js";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../action/User";
import { Skeleton } from "@material-ui/lab";
import ProfileExpand from "./ProfileExpand";
import { getSearchList, searchPhoto } from "../../action/Photo";

const Header = (props) => {
  const { classes } = props;
  const [widthStatus, setWidth] = useState(false);
  const [isExpand, setExpand] = useState(false);
  const [searchText, setSearch] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawer, setDrawer] = useState({ chat: false, profile: false });
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const searchResult = useSelector((state) => state.photo.searchPhoto);
  const listSearch = useSelector((state) => state.photo.listSearch);

  useEffect(async () => {
    dispatch(getCurrentUser());

    const handleResize = () => {
      if (window.innerWidth <= 1400) {
        setWidth(true);
        setExpand(false);
      } else {
        setWidth(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setExpand(false);
  }, [searchResult]);
  useEffect(() => {
    if (isLogged) {
      dispatch(getSearchList());
    }
  }, [searchResult]);

  //home buttom
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleExpand = (status) => {
    setTimeout(() => {
      setExpand(status);
    }, 100);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhoto(searchText));
  };
  const quickSearch = (q) => {
    setSearch(q);
    dispatch(searchPhoto(q));
  };

  return (
    <Grid container md={12} sm={12} className={classes.appBar}>
      <div className={classes.logo}>
        <Avatar alt="Logo" src={logo} className={classes.logo} />
      </div>
      <Grid container md={2} sm={6} xs={6}>
        {!widthStatus ? (
          <Grid container justify="center">
            <Grid item>
              <NavLink
                to="/"
                activeClassName="linkActive"
                className={classes.menuLink}
                exact
              >
                Trang chủ
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink
                to="/following"
                activeClassName="linkActive"
                className={classes.menuLink}
              >
                Theo dõi
              </NavLink>
            </Grid>
          </Grid>
        ) : (
          <div className={classes.dropDownMenu}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              fullWidth
              onClick={handleClick}
            >
              Trang chủ
              <ExpandMoreIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Grid item>
                <NavLink activeClassName={classes.linkActive} to="/" exact>
                  <Typography className={classes.menuLink}>
                    Trang chủ
                  </Typography>{" "}
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/following" activeClassName={classes.linkActive}>
                  <Typography className={classes.menuLink}>Theo dõi</Typography>{" "}
                </NavLink>{" "}
              </Grid>
            </Menu>{" "}
          </div>
        )}
      </Grid>

      <Grid md={8} sm={12} className={classes.search}>
        <SearchIcon fontSize="medium" />
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <InputBase
            fullWidth
            placeholder="Tìm kiếm"
            type="text"
            value={searchText}
            className={classes.searchInput}
            onFocus={() => toggleExpand(true)}
            onBlur={() => toggleExpand(false)}
            onChange={handleChange}
          />
        </form>
        <Box
          display={isExpand ? "block" : "none"}
          className={classes.searchExpand}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Tìm kiếm gần đây
            </Typography>
            <ClearIcon style={{ cursor: "pointer", color: "grey" }} />
          </Box>
          <List component="nav" className={classes.searchPrev}>
            {listSearch
              ? listSearch[0].history_search.map((result, index) => {
                  return (
                    <ListItem
                      button
                      className={classes.searchItems}
                      key={index}
                      onClick={() => quickSearch(result)}
                    >
                      <ListItemText primary={result} />
                    </ListItem>
                  );
                })
              : ""}
          </List>
        </Box>
      </Grid>
      <Grid container md={1} sm={2} alignItems="center" justify="center">
        <Box display={isLogged ? "none" : "flex"}>
          <NavLink
            to="/login"
            activeClassName="linkActive"
            className={classes.btnLogin}
          >
            Đăng nhập
          </NavLink>
        </Box>
        <Box
          display={isLogged ? "flex" : "none"}
          alignItems="center"
          justify="center"
        >
          <Grid item className={classes.rightItem}>
            <SmsIcon
              onClick={() => setDrawer({ ...drawer, chat: !drawer.chat })}
              className={classes.icon}
            />
            {drawer.chat ? "Chat" : null}
          </Grid>
          <Grid item className={classes.rightItem}>
            <a href={!user ? "" : `/user/${user._id}`}>
              <Avatar
                alt="Logo"
                src={user ? user.avatar : ""}
                className={classes.avatar}
              >
                {user && user.last_name.split("")[0]}
              </Avatar>
            </a>
          </Grid>
          <Grid item className={classes.rightItem}>
            <ArrowDropDownIcon
              onClick={() => setDrawer({ ...drawer, profile: !drawer.profile })}
              className={classes.icon}
            />
            {drawer.profile ? <ProfileExpand /> : null}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(Header);
