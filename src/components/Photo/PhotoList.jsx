import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  LinearProgress,
  Modal,
  NativeSelect,
  TextField,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

import React, { useState } from "react";
import PhotoItems from "./PhotoItems";

import { useEffect } from "react";
import PhotoFollow from "./PhotoFollow";
import style from "../assets/style/home/photo";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../action/Photo";
import { createAlbum, getAlbum } from "../../action/Album";

import { NotificationManager } from "react-notifications";

const PhotoLists = (props) => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  const dispatch = useDispatch();

  const { url } = props.match;
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [photo, setPhoto] = useState({
    title: "",
    desc: "",
    photo: "",
    album: "",
  });
  const [tempUrl, setUrl] = useState("");
  const [toggleImg, setToggle] = useState(false);
  const [isUpload, setIsUpload] = useState(true);
  const [loading, setLoading] = useState(false);
  const [albumName, setAlbum] = useState({ name: "" });

  const albums = useSelector((state) => state.album.data);
  const resUpload = useSelector((state) => state.photo.uploadPhoto);
  const resCreateAlb = useSelector((state) => state.album.createAlb);

  useEffect(() => {
    if (photo.photo && photo.title && photo.album) {
      setIsUpload(false);
    } else {
      setIsUpload(true);
    }
  }, [photo]);
  useEffect(() => {
    if (resUpload) {
      setLoading(false);
      setOpen(false);
      setUrl("");
      setToggle(false);
      if (resUpload === "Upload Photo Success!") {
        NotificationManager.success("Tải ảnh lên thành công!");
        setPhoto({ title: "", desc: "", photo: "", album: "" });
        setSuccess(true);
      } else {
        NotificationManager.errors("Có lỗi xảy ra! Vui lòng thử lại");
      }
    }
  }, [resUpload]);

  useEffect(() => {
    if (resCreateAlb) {
      if (resCreateAlb.status === 200) {
        NotificationManager.success("Tạo album thành công");
        dispatch(getAlbum());
        setSubOpen(false);
      }
    }
  }, [resCreateAlb]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    let name = e.target.name,
      value = e.target.value;
    if (name === "photo") {
      value = e.target.files[0];
      let baseUrl = URL.createObjectURL(e.target.files[0]);
      setUrl(baseUrl);
      setToggle(true);
    }
    if (name === "name") {
      setAlbum({ [name]: value });
    }
    setPhoto({ ...photo, [name]: value });
  };
  const submit = () => {
    setLoading(true);
    dispatch(uploadPhoto(photo));
  };
  const createAlb = () => {
    if (isUpload === true) {
      dispatch(createAlbum(albumName));
    }
  };

  let album;
  if (albums) {
    album = albums.data.map((a, index) => {
      return (
        <option key={index} value={a._id}>
          {a.name}
        </option>
      );
    });
  }

  return (
    <Grid container md={12} xs={12} sm={12}>
      <Box>
        <Tooltip title="Tải ảnh mới" aria-label="add">
          <AddIcon className={classes.createIcon} onClick={handleOpen} />
        </Tooltip>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Grid container xs={10} md={6} className={classes.createModal}>
          <Grid md={6} xs={6} sm={6}>
            <Typography variant="h4" align="center">
              Tải ảnh lên{" "}
            </Typography>
            <Box display="none">
              <TextField
                name="photo"
                type="file"
                placeholder="Tiêu đề ảnh"
                id="photo"
                onChange={handleChange}
              />
            </Box>
            <label htmlFor="photo">
              <Box
                display={toggleImg ? "none" : "flex"}
                md={8}
                sm={8}
                className={classes.photoFrame}
              >
                <ArrowUpwardOutlinedIcon />
                <Typography>Nhấp vào đây để tải ảnh lên </Typography>
              </Box>
              <Box
                display={!toggleImg ? "none" : "flex"}
                md={8}
                sm={8}
                className={classes.photoFrame}
              >
                <img
                  src={tempUrl}
                  alt="Ảnh xem trước"
                  className={classes.createPhoto}
                />
              </Box>
            </label>
          </Grid>
          <Grid md={6} sm={6}>
            <div style={{ marginTop: "80px" }}>
              <TextField
                name="title"
                type="text"
                placeholder="Tiêu đề ảnh"
                className={classes.photoTitle}
                id="photoTitle"
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <TextField
                name="desc"
                type="text"
                placeholder="Hãy nhập mô tả về ảnh này..."
                className={classes.photoDesc}
                id="photoDesc"
                onChange={handleChange}
              />
            </div>
            <Box display="flex" className={classes.createSelectAlb}>
              <Grid container alignItems="center" md={12}>
                <NativeSelect
                  name="album"
                  className={classes.createAlb}
                  onChange={handleChange}
                  required
                >
                  <option selected value="" disabled>
                    --Chọn album--
                  </option>
                  {album}
                </NativeSelect>
                <Button
                  style={{ height: "50px" }}
                  onClick={() => setSubOpen(true)}
                >
                  Thêm
                </Button>
                {/* ------- */}
                <Dialog open={subOpen} onClose={() => setSubOpen(false)}>
                  <DialogTitle align="center">
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                      Thêm album mới
                    </Typography>{" "}
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      id="newAlbumName"
                      name="name"
                      value={albumName.name}
                      label="Tên album:"
                      type="text"
                      fullWidth
                      className={classes.newName}
                      onChange={handleChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button color="default" onClick={() => setSubOpen(false)}>
                      Huỷ
                    </Button>
                    <Button color="secondary" onClick={createAlb}>
                      Xong
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>

              {!loading ? (
                <Button
                  onClick={submit}
                  className={classes.btnCreate}
                  disabled={isUpload}
                >
                  Lưu
                </Button>
              ) : (
                <LinearProgress color="secondary" style={{ width: "87%" }} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Modal>

      {url !== "/following" ? (
        <PhotoItems uploadSuccess={success} />
      ) : (
        <PhotoFollow />
      )}
    </Grid>
  );
};

export default withStyles(style)(PhotoLists);
