import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import style from "../assets/style/home/user";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUserById } from "../../action/User";
import isLogged from "../assets/config/isLogged";
import { createAlbum, getAlbumByUser } from "../../action/Album";
import imageEmpty from "../assets/img/empty.jpg";
import { NotificationManager } from "react-notifications";

const User = (props) => {
  const dispatch = useDispatch();
  const { classes } = props;

  const [open, setOpen] = useState(false);
  const [stateAlbum, setAlbum] = useState({ name: "" });

  const { id } = useParams();

  const user = useSelector((state) => state.user.user);
  const currentUser = useSelector((state) => state.user.currentUser);
  const albums = useSelector((state) => state.album.albumUser);
  const isSuccess = useSelector((state) => state.album.createAlb);
  const isUpdate = useSelector((state) => state.album.isUpdate);

  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(getAlbumByUser(id));
    if (isLogged) {
      dispatch(getCurrentUser(id));
    }
  }, []);
  useEffect(() => {
    if (isSuccess) {
      dispatch(getAlbumByUser(id));
      NotificationManager.success(`Đã tạo album: ${stateAlbum.name}`);
      setAlbum({ name: "" });
      setOpen(false);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setAlbum({ name: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(createAlbum(stateAlbum));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  let renderAlbums;
  if (albums) {
    renderAlbums = albums.map((album, index) => {
      return (
        <a
          href={`/album/${album._id}`}
          key={index}
          className={classes.albumItem}
        >
          <AvatarGroup max={5} className={classes.albumItems}>
            {album.photos.length ? (
              album.photos.map((url, index) => {
                return (
                  <Avatar
                    key={index}
                    variant="rounded"
                    src={url.url}
                    alt={album.name}
                    className={classes.photo}
                    style={{ zIndex: `3 !important` }}
                  />
                );
              })
            ) : (
              <img
                variant="rounded"
                src={imageEmpty}
                alt="Ảnh trong album"
                className={classes.photo}
                style={{
                  zIndex: `3 !important`,
                  backgroundColor: "grey !important",
                }}
              />
            )}
          </AvatarGroup>
          <div>
            <Typography variant="h6" style={{ marginLeft: "50px" }}>
              {album.name}
            </Typography>
          </div>
        </a>
      );
    });
  }
  if (user) {
    return (
      <Grid xs={12} md={12} className={classes.profileContainer}>
        <Box className={classes.userProfile} align="center" display="block">
          <Avatar
            src={user.avatar}
            alt="Anh dai dien"
            className={classes.userAvatar}
          >
            {user.last_name.split("")[0]}
          </Avatar>
          <Typography variant="h4">
            {user.first_name + " " + user.last_name}
          </Typography>
          <div className={classes.follow}>
            <Typography variant="subtitle1" style={{ margin: "0 10px" }}>
              {user.following.length + " "}người theo dõi
            </Typography>
            <Typography>•</Typography>
            <Typography variant="subtitle1" style={{ margin: "0 10px" }}>
              {user.followers.length + " "}
              người đang theo dõi
            </Typography>
          </div>
        </Box>
        {currentUser ? (
          currentUser._id === user._id ? (
            <Grid
              container
              justify="space-between"
              style={{ padding: "10px 25px", margin: "20px 0" }}
            >
              <Link to="/profile/update">
                <Tooltip title="Chỉnh sửa thông tin" aria-label="add">
                  <EditIcon className={classes.icon} />
                </Tooltip>
              </Link>
              <Tooltip
                title="Tạo album mới"
                aria-label="add"
                onClick={handleOpen}
              >
                <AddIcon className={classes.icon} />
              </Tooltip>
            </Grid>
          ) : null
        ) : null}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle align="center">
            <Typography style={{ fontWeight: "bold", fontSize: "1.8em" }}>
              Tạo album mới
            </Typography>{" "}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="Tên album:"
              type="text"
              name="album_name"
              value={stateAlbum.name}
              onChange={handleChange}
              fullWidth
              className={classes.newName}
            />
          </DialogContent>
          <DialogActions>
            <Button color="default" onClick={handleClose}>
              Huỷ
            </Button>
            <Button color="secondary" onClick={handleSubmit}>
              Lưu
            </Button>
          </DialogActions>
        </Dialog>

        <Grid xs={12} md={12}>
          <Grid container className={classes.listAlbums}>
            {renderAlbums}
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};

export default withStyles(style)(User);
