import React from "react";

import logo from "../assets/img/logo.png";
import "../assets/style/home/home.css";

import SmsIcon from "@material-ui/icons/Sms";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Grid,
  InputBase,
  Menu,
  MenuItem,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

import { useState, useEffect } from "react";

import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import style from "../assets/style/home/home.js";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { classes } = props;
  const [widthStatus, setWidth] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawer, setDrawer] = useState({ chat: false, profile: false });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1400) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);
  });

  const toggleChat = (isOpen) => (event) => {
    setDrawer({ ...drawer, chat: isOpen, profile: isOpen });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                <NavLink  activeClassName={classes.linkActive} to="/" exact>
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
        <InputBase
          placeholder="Tìm kiếm"
          type="text"
          className={classes.searchInput}
        />
      </Grid>
      <Grid
        container
        md={1}
        sm={2}
        alignItems="center"
        justify="center"

      >
        <Box display="flex" >
          <NavLink to="/login" activeClassName="linkActive" className={classes.btnLogin}>Đăng nhập</NavLink>
        </Box>
        <Box display="none" alignItems="center" justify="center">
          <Grid item className={classes.rightItem}>
            <SmsIcon
              onClick={() => setDrawer({ ...drawer, chat: true })}
              className={classes.icon}
            />
            <Drawer
              anchor="right"
              open={drawer.chat}
              onClick={toggleChat(false)}
            >
              chat
            </Drawer>
          </Grid>
          <Grid item className={classes.rightItem}>
            <Avatar alt="Logo" src={logo} className={classes.avatar} />
          </Grid>
          <Grid item className={classes.rightItem}>
            <ArrowDropDownIcon
              onClick={() => setDrawer({ ...drawer, profile: true })}
              className={classes.icon}
            />
            <Drawer
              anchor="right"
              open={drawer.profile}
              onClick={toggleChat(false)}
            >
              profile
            </Drawer>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(style)(Header);
