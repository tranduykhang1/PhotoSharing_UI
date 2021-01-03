import {
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
import { NotificationManager } from "react-notifications";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhoto, savePhoto } from "../../action/Photo";
import { Skeleton } from "@material-ui/lab";
import { getAlbum } from "../../action/Album.js";
import { getCurrentUser } from "../../action/User.js";
import icon from "../assets/img/love.png";
import subString from "../assets/config/subString.js";

const PostItems = (props) => {
  const loadingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const dispatch = useDispatch();
  const { classes } = props;
  const [stateAlbum, setAlbum] = useState("");

  let data = useSelector((state) => state.photo.listPhotos);
  const album = useSelector((state) => state.album.data);
  const currentUser = useSelector((state) => state.user.currentUser);
  const saveRes = useSelector((state) => state.photo.saveRes);
  const searchResult = useSelector((state) => state.photo.searchPhoto);

  useEffect(() => {
    dispatch(getAllPhoto());
    dispatch(getAlbum());
    dispatch(getCurrentUser());
  }, []);
  useEffect(() => {
    dispatch(getAllPhoto());
  }, [props.uploadSuccess]);
  useEffect(() => {
    if (searchResult) {
      data = searchResult;
    }
  }, [searchResult]);

  const handleChange = (e) => {
    setAlbum(e.target.value);
  };

  const handleSave = async (data) => {
    dispatch(savePhoto(stateAlbum, data));
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

  let albums;
  if (album) {
    albums = album.data.map((alb, index) => {
      return (
        <option value={alb._id} key={index}>
          {alb.name}
        </option>
      );
    });
  }

  let photo;
  if (!data) {
    photo = loadingData.map((d, index) => {
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
    if (searchResult) {
      data = searchResult;
    }
    photo = data.map((d, index) => {
      let fullName = subString(
        d.users[0].first_name + d.users[0].last_name,
        true
      );
      let title = subString(d.title, false);
      return (
        <Card className={classes.cardItems} key={index}>
          {currentUser && currentUser._id === d.users[0]._id ? (
            <Box display="flex" className={classes.albumOption}>
              <Typography style={{ color: "white" }}>Bạn đã tải lên</Typography>
            </Box>
          ) : (
            <Box display="flex" className={classes.albumOption}>
              <NativeSelect
                name="age"
                className={classes.select}
                onChange={handleChange}
              >
                <option disabled selected value="">
                  --Albums--
                </option>
                {albums}
              </NativeSelect>
              <Button
                className={classes.saveImg}
                disabled={currentUser ? (stateAlbum ? false : true) : true}
                onClick={() => handleSave(d)}
              >
                Lưu
              </Button>
            </Box>
          )}

          <a href={`/photo/${d._id}`}>
            <div>
              <img src={d.url} alt={d.name} className={classes.image} />
            </div>
          </a>
          <Box display="flex" className={classes.bottomOption}>
            <Button color="primary" size="small" className={classes.showUser}>
              {fullName}
            </Button>
            <div className={classes.countReaction}>
              {/* <FavoriteIcon style={{ color: "white" }} /> */}
              <img src={icon} id="icon" alt="Reaction" />
              <Typography style={{ color: "white" }}>
                {d.reaction.length}
              </Typography>
            </div>
          </Box>
          <Grid className={classes.photoTitle}>
            <Typography variant="h6" className={classes.textTitle}>
              {title}
            </Typography>
          </Grid>
        </Card>
      );
    });
  }

  return (
    <Grid container className={classes.cardContainer}>
      {searchResult && !searchResult.length ? (
        <Typography variant="h4" align="center">
          Chúng tôi không tim thấy kết quả mong muốn!!
        </Typography>
      ) : (
        ""
      )}
      <Masonry
        columnClassName=""
        breakpointCols={breakpointColumnsObj}
        className={classes.cardColumn}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {photo}
      </Masonry>
    </Grid>
  );
};

export default withStyles(style)(PostItems);
