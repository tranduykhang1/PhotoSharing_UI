import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  NativeSelect,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import swal from "sweetalert";

import style from "../assets/style/home/photo";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import { getPhotoByAlbum } from "../../action/Photo";
import {
  deleteAlbum,
  getAlbum,
  getAlbumById,
  renameAlbum,
} from "../../action/Album";
import {removePhoto} from '../../action/Photo'
import { Skeleton } from "@material-ui/lab";
import { NotificationManager } from "react-notifications";
import { getCurrentUser } from "../../action/User";
import subString from "../assets/config/subString";
import icon from "../assets/img/love.png";

const Album = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { classes } = props;
  const loadingData = [1, 1, 1, 1, 1, 1];

  const [open, setOpen] = useState(false);
  const [stateAlbum, setAlbum] = useState({ name: "" });

  const listPhotos = useSelector((state) => state.photo.albumPhotos);
  const currentAlbum = useSelector((state) => state.album.albumId);
  const listAlbums = useSelector((state) => state.album.data);
  const isDelete = useSelector((state) => state.album.deleteRes);
  const isUpdate = useSelector((state) => state.album.isUpdate);
  const isRemove = useSelector((state) => state.photo.isRemove);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const dispatchAction = async () => {
      dispatch(getAlbum());
      dispatch(getCurrentUser());
      dispatch(getPhotoByAlbum(id));
      dispatch(getAlbumById(id));
    };
    dispatchAction();
  }, []);

  useEffect(() => {
    dispatch(getPhotoByAlbum(id));
  }, [isRemove]);

  useEffect(() => {
    if (currentAlbum) {
      setAlbum({ name: currentAlbum.name });
    }
  }, [currentAlbum]);
  useEffect(() => {
    if (isDelete) {
      window.location.href = `/user/${currentAlbum.user}`;
    }
    if (isUpdate) {
      setOpen(false);
    }
  }, [isDelete, isUpdate]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setAlbum({ name: e.target.value });
  };
  const handleSubmit = () => {
    if (stateAlbum.name === "") {
      NotificationManager.error("Hãy nhập tên album");
    } else {
      dispatch(renameAlbum(currentAlbum._id, stateAlbum.name));
    }
  };
  const handleRemove = () => {
    swal({
      title: `Xoá album "${stateAlbum.name}?"`,
      icon: "warning",
      buttons: {
        cancel: "Không",
        confirm: "Xoá",
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteAlbum(currentAlbum._id));
      }
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setAlbum({ name: currentAlbum.name });
    setOpen(false);
  };
  const handleRemovePhoto = (photo) => {
    swal({
      title: `Bạn muốn xoá ảnh này?"`,
      icon: "warning",
      buttons: {
        cancel: "Không",
        confirm: "Xoá",
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removePhoto(photo._id))
      }
    });
  };

  const breakpointColumnsObj = {
    default: 6,
    1100: 3,
    700: 2,
    500: 1,
  };

  let photos;
  if (!listPhotos) {
    photos = loadingData.map((d, index) => {
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
    photos = listPhotos.map((d, index) => {
      let fullName = subString(
        d.users[0].first_name + d.users[0].last_name,
        true
      );
      let title = subString(d.title, false);
      return (
        <Card className={classes.cardItems} key={index}>
          {currentUser && currentAlbum ? (
            currentUser._id === currentAlbum.user ? (
              <Box display="flex" className={classes.albumOption}>
                <Button
                  className={classes.removeImg}
                  onClick={() => handleRemovePhoto(d)}
                >
                  Gỡ
                </Button>
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
                  {listAlbums
                    ? listAlbums.data.map((alb, index) => {
                        return (
                          <option value={alb._id} key={index}>
                            {alb.name}
                          </option>
                        );
                      })
                    : ""}
                </NativeSelect>
                <Button className={classes.saveImg}>Lưu</Button>
              </Box>
            )
          ) : (
            ""
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
            <div style={{ display: "flex" }}>
              <img src={icon} id="icon" />
              <Typography style={{ color: "white" }}>1</Typography>
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
    <Grid xs={12} md={12} align="center" style={{ margin: "50px 0" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {currentAlbum ? (
            stateAlbum.name
          ) : (
            <Skeleton animation="wave" style={{ width: "150px" }} />
          )}
        </Typography>
        <EditIcon className={classes.moreIcon} onClick={handleOpen} />
        <DeleteIcon className={classes.moreIcon} onClick={handleRemove} />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center">
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Đổi tên album của bạn
          </Typography>{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="newAlbumName"
            placeholder="Tên album: Bóng đá,..."
            type="text"
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
            Xong
          </Button>
        </DialogActions>
      </Dialog>

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

export default withStyles(style)(Album);
