import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Link,
  NativeSelect,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendIcon from "@material-ui/icons/Send";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import style from "../assets/style/home/photo";
import icon from "../assets/img/love.png";

import CommentItems from "./CommentItems";
import Masonry from "react-masonry-css";
import { Skeleton } from "@material-ui/lab";
import { getPhotoById, reactionPhoto, searchPhoto } from "../../action/Photo";
import { getAlbum } from "../../action/Album.js";
import { postComment } from "../../action/Comment";
import { followUser, getListFollows, unFollowUser } from "../../action/User";

const PhotoDetail = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  const { id } = useParams();

  const [comment, setComment] = useState({
    user_id: "",
    photo_id: "",
    comment: "",
  });
  const [reactionStatus, setReaction] = useState(false);
  const [followStatus, setFollow] = useState(false);

  const album = useSelector((state) => state.album.data);

  const loadingData = [1, 2, 3, 4, 5, 6];
  const breakpointColumnsObj = {
    default: 6,
    1100: 3,
    700: 2,
    500: 1,
  };

  const photo = useSelector((state) => state.photo.data);
  const currentUser = useSelector((state) => state.user.currentUser);
  const listPhotos = useSelector((state) => state.photo.searchPhoto);
  const reactionRes = useSelector((state) => state.photo.reactionRes);
  const listFollows = useSelector((state) => state.user.listFollows);
  const followRes = useSelector((state) => state.user.followRes);
  const unFollowRes = useSelector((state) => state.user.unFollowRes);

  useEffect(() => {
    const dispatchAction = async () => {
      dispatch(getListFollows());
      dispatch(getAlbum());
      dispatch(getPhotoById(id));
    };
    dispatchAction();
  }, []);

  useEffect(() => {
    dispatch(getPhotoById(id));
    dispatch(getListFollows());
  }, [reactionRes, followRes, unFollowRes]);

  if (unFollowRes) {
    console.log(unFollowRes);
  }
  useEffect(() => {
    if (photo) {
      dispatch(searchPhoto(photo[0].title));
    }
  }, [photo]);

  useEffect(() => {
    if (photo && currentUser) {
      if (!photo[0].reaction.length) {
        setReaction(false);
      } else {
        photo[0].reaction.map((reaction) => {
          if (reaction.id === currentUser._id) {
            setReaction(true);
          } else {
            setReaction(false);
          }
        });
      }
    }
    if (listFollows && currentUser && photo) {
      if (!listFollows.length) {
        setFollow(false);
      } else {
        listFollows.map((user) => {
          if (user.users[0]._id === photo[0].userId) {
            setFollow(true);
          } else {
            setFollow(false);
          }
        });
      }
    }
  });

  const handleChange = (e) => {
    setComment({
      user_id: currentUser._id,
      photo_id: photo[0]._id,
      content: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment(comment));
    setComment({ ...comment, content: "" });
  };
  const handleReaction = () => {
    dispatch(reactionPhoto(photo[0]._id, currentUser._id));
  };

  const handleFollow = () => {
    dispatch(followUser(photo[0].userId));
  };
  const handleUnFollow = () => {
    dispatch(unFollowUser(photo[0].userId));
  };

  let albums;
  if (album) {
    albums = album.data.map((alb, index) => {
      return (
        <option value={alb.name} key={index}>
          {alb.name}
        </option>
      );
    });
  }

  let relationPhotos;
  if (!listPhotos) {
    relationPhotos = loadingData.map((p, index) => {
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
    relationPhotos = listPhotos.map((photo, index) => {
      return (
        <Card className={classes.cardItems} key={index}>
          <Box display="flex" className={classes.albumOption}>
            <NativeSelect name="age" className={classes.select}>
              {albums}
            </NativeSelect>
            <Button className={classes.saveImg}>Lưu</Button>
          </Box>

          <a href={`/photo/${photo._id}`}>
            <div>
              <img src={photo.url} alt={photo.name} className={classes.image} />
            </div>
          </a>
          <Box display="flex" className={classes.bottomOption}>
            <Button color="primary" className={classes.showUser}>
              {photo.users[0].first_name + " " + photo.users[0].last_name}
            </Button>
            <div className={classes.countReaction}>
              <FavoriteIcon style={{ color: "white" }} />
              <Typography style={{ color: "white" }}>
                {photo.reaction && photo.reaction.length}
              </Typography>
            </div>
          </Box>
          <Grid className={classes.photoTitle}>
            <Typography variant="h6" className={classes.textTitle}>
              {photo.title}
            </Typography>
          </Grid>
        </Card>
      );
    });
  }

  return (
    <Grid xs={12} md={12} style={{ margin: "auto" }}>
      <Grid container xs={10} md={8} className={classes.photoContainer}>
        <Grid item xs={false} sm={4} md={6}>
          <img
            src={photo ? photo[0].url : ""}
            alt="Anh"
            className={classes.photo}
          />
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          {currentUser && photo ? (
            <Box
              display={currentUser._id === photo[0].userId ? "none" : "flex"}
              alignItems="center"
              style={{ opacity: "1 !important", justifyContent: "center" }}
            >
              <NativeSelect name="age" className={classes.selectAlbum}>
                {albums}
              </NativeSelect>
              <Button className={classes.saveImg}>Lưu</Button>
            </Box>
          ) : (
            ""
          )}
          <div className={classes.titleAndDesc}>
            <Typography variant="h6">{photo && photo[0].title}</Typography>
            <Typography>{photo && photo[0].desc}</Typography>
          </div>

          <Grid container alignItems="center" className={classes.userInfo}>
            <Typography variant="h6" style={{ marginRight: "10px" }}>
              Tải lên bởi
            </Typography>
            <Typography variant="h5">
              {photo
                ? photo[0].users[0].first_name +
                  " " +
                  photo[0].users[0].last_name
                : null}
            </Typography>
          </Grid>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ color: "black" }}
          >
            <Box
              display="flex"
              alignItems="center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                (window.location.href = `/user/${photo[0].users[0]._id}`)
              }
            >
              <Avatar
                alt="Avatar"
                src={photo ? photo[0].users[0].avatar : null}
              >
                {photo ? photo[0].users[0].last_name.split("")[0] : null}
              </Avatar>
              <Box display="block" margin={2}>
                <Typography variant="h6">
                  {photo ? photo[0].users[0].last_name : null}
                </Typography>
                <Typography variant="span" color="textSecondary">
                  {photo ? photo[0].users[0].followers.length : 0} người theo
                  dõi
                </Typography>
              </Box>
            </Box>
            {!followStatus ? (
              <Button className={classes.btnFollow} onClick={handleFollow}>
                Theo dõi
              </Button>
            ) : (
              <Button
                className={classes.btnFollow}
                color="secondary"
                onClick={handleUnFollow}
              >
                Bỏ theo dõi
              </Button>
            )}
          </Grid>
          <Grid
            container
            xs={10}
            md={10}
            justify="space-between"
            alignItems="center"
            style={{ marginTop: "10px" }}
          >
            <Grid className={classes.reaction} md={12} sm={12}>
              <Accordion className={classes.commentContainer}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">Nhận xét</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.commentContent}>
                  <CommentItems photoId={photo} />
                </AccordionDetails>
                <AccordionActions
                  style={{ width: "100%", display: "flex", padding: "0" }}
                >
                  <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <Input
                      fullWidth
                      value={comment.content}
                      onChange={handleChange}
                      style={{ padding: "10px 5px" }}
                      type="text"
                      placeholder="Thêm nhận xét"
                      color="default"
                      endAdornment={
                        <InputAdornment position="end">
                          <SendIcon style={{ color: "rgb(17, 41, 136)" }} />
                        </InputAdornment>
                      }
                    />
                  </form>
                </AccordionActions>
              </Accordion>
              <div className={classes.reactionHeart}>
                <Typography variant="subtitle1" color="textSecondary">
                  {photo ? photo[0].reaction.length : 0}
                </Typography>
                <div onClick={handleReaction}>
                  <img
                    src={icon}
                    alt="Reaction"
                    id={!reactionStatus ? "icon" : "icon-active"}
                  />
                </div>
                {/* <FavoriteIcon className={classes.photoHeart} /> */}
              </div>
            </Grid>
          </Grid>
          <Box className={classes.comments}></Box>
        </Grid>
      </Grid>
      <Grid align="center" className={classes.cardContainer}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Ý tưởng tương tự
        </Typography>
        <Masonry
          columnClassName=""
          breakpointCols={breakpointColumnsObj}
          className={classes.cardColumn}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {relationPhotos}
        </Masonry>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(PhotoDetail);
