import { List, ListItem, Typography, withStyles } from "@material-ui/core";
import { Link, useHistory, Redirect } from "react-router-dom";
import style from "../assets/style/home/home";

import React from "react";
import { HistorySharp } from "@material-ui/icons";

const ProfileExpander = (props) => {
  const { classes } = props;
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/login"
  };
  return (
    <div className={classes.profileContainer}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <Link>
            <Typography variant="strong">Trang cá nhân</Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="update-password">
            <Typography variant="strong">Đổi mật khẩu</Typography>
          </Link>
        </ListItem>
        <ListItem button onClick={logout}>
            <Typography variant="strong">Đăng xuất</Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(style)(ProfileExpander);
