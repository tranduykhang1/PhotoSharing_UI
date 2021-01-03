import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  NativeSelect,
  Typography,
  withStyles,
} from "@material-ui/core";

import style from "../assets/style/home/photo.js";
import Masonry from "react-masonry-css";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { useDispatch, useSelector } from "react-redux";
import { getListFollow } from "../../action/User.js";
import { getPhotoByFollowing, savePhoto } from "../../action/Photo.js";
import { getAlbum } from "../../action/Album.js";
import { Skeleton } from "@material-ui/lab";
import isLogged from "../assets/config/isLogged";
import { NotificationManager } from "react-notifications";
import icon from "../assets/img/love.png"
import subString from "../assets/config/subString"


const PhotoFollow = (props) => {
  const loading = [1, 1, 1, 1, 1, 1];
  const { classes } = props;

  const dispatch = useDispatch();
  const [stateAlbum, setAlbum] = useState("");

  const listFollow = useSelector((state) => state.user.following);
  const listPhoto = useSelector((state) => state.photo.photoFl);
  const listAlbum = useSelector((state) => state.album.data);
  const saveRes = useSelector((state) => state.photo.saveRes);


  useEffect(() => {
    if (!isLogged) {
      window.location.href = "/login";
    } else {
      dispatch(getPhotoByFollowing());
      dispatch(getListFollow());
      dispatch(getAlbum());
    }
  }, []);
  const handleChange = (e) => {
    setAlbum(e.target.value);
  };

  const handleSave = async (data) => {
    dispatch(savePhoto(stateAlbum, data.photos));
    return setAlbum("");
  };

  if (saveRes) {
    NotificationManager.success("Đã Lưu");
  }

  const breakpointColumnsObj = {
    default: 6,
    1100: 3,
    700: 2,
    500: 1,
  };

  //
  let albums;
  if (listAlbum) {
    albums = listAlbum.data.map((alb, index) => {
      return (
        <option value={alb._id} key={index}>
          {alb.name}
        </option>
      );
    });
  }
  let photos;
  if (!listPhoto) {
    photos = loading.map((p, index) => {
      console.log(index);
      return (
        <Card className={classes.cardItems} key={index}>
          <Skeleton
            animation="pulse"
            variant="rect"
            width={200}
            height={270}
            style={{ borderRadius: "20px" }}
          />
        </Card>
      );
    });
  } else {
    photos = listPhoto.map((p, index) => {
      let fullName = subString(p.first_name+ p.last_name, true);
      let title = subString(p.photos.title, false);
      return (
        <Card className={classes.cardItems} key={index}>
          <Box display="flex" className={classes.albumOption}>
            <NativeSelect name="age" className={classes.select} onChange={handleChange}>
              <option value="" selected disabled>--Album--</option>
              {albums}
            </NativeSelect>
            <Button
              className={classes.saveImg}
              disabled={stateAlbum ? false : true}
              onClick={() => handleSave(p)}
            >
              Lưu
            </Button>
          </Box>
          <a href={`/photo/${p.photos._id}`}>
            <div>
              <img
                src={p.photos.url}
                title="Paella dish"
                className={classes.image}
              />
            </div>
          </a>
          <Box display="flex" className={classes.bottomOption}>
            <Button color="primary" className={classes.showUser}>
              {fullName}
            </Button>
            <Link className={classes.countReaction}>
              {/* <FavoriteIcon style={{ color: "white" }} /> */}
              <img src={icon} id="icon"/>
              <Typography style={{ color: "white" }}>1</Typography>
            </Link>
          </Box>
          <Grid className={classes.photoTitle}>
            <Typography variant="strong" className={classes.textTitle}>
              {title}
            </Typography>
          </Grid>
        </Card>
      );
    });
  }

  let listFollowing;
  if (!listFollow) {
    listFollowing = loading.map((p, index) => {
      return (
        <a href="" key={index}>
          <Skeleton
            variant="circle"
            width={70}
            height={70}
            className={classes.followingAvatar}
          />
        </a>
      );
    });
  } else {
    listFollowing = listFollow.map((user, index) => {
      return (
        <a href={`/user/${user.users[0]._id}`} key={index}>
          <Avatar
            alt="Ảnh đại diện"
            src={user.users[0].avatar}
            className={classes.followingAvatar}
          >
            {user.users[0].last_name}
          </Avatar>
        </a>
      );
    });
  }

  return (
    <Grid className={classes.cardContainer} md={12} sm={12}>
      <Grid className={classes.followingTitle}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Những người bạn đang theo dõi
        </Typography>
        <AvatarGroup
          max={10}
          style={{ justifyContent: "center", margin: "20px 0" }}
        >
          {listFollowing}
        </AvatarGroup>
      </Grid>
      <Masonry
        columnClassName=""
        breakpointCols={breakpointColumnsObj}
        className={classes.cardColumn}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {photos}
      </Masonry>
    </Grid>
  );
};

export default withStyles(style)(PhotoFollow);
