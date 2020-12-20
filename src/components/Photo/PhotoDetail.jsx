import {
  Avatar,
  Box,
  Button,
  Grid,
  NativeSelect,
  Typography,
  withStyles,
  Zoom,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from '@material-ui/icons/Favorite';

import React from "react";
import style from "../assets/style/home/photo";

import image from "../assets/img/login-background.jpg";
import CommentItems from "./CommentItems";

const PhotoDetail = (props) => {
  const { classes } = props;
  return (
    <Grid container xs={10} md={8} className={classes.photoContainer}>
      <Grid item xs={false} sm={4} md={6}>
        <img src={image} alt="Anh" className={classes.photo} />
      </Grid>

      <Grid xs={12} md={6} className={classes.infoContainer}>
        <Box
          display="flex"
          alignItems="center"
          style={{ opacity: "1 !important", justifyContent: "center" }}
        >
          <NativeSelect name="age" className={classes.selectAlbum}>
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <Button className={classes.saveImg}>Save</Button>
        </Box>
        <Grid container alignItems="center" className={classes.userInfo}>
          <Typography variant="h5" style={{ marginRight: "10px" }}>
            Tải lên bởi
          </Typography>
          <Typography variant="h4">Alex sandro delima</Typography>
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ color: "black" }}
        >
          <Box display="flex" alignItems="center">
            <Avatar alt="Avatar" src={image}></Avatar>
            <Box display="block" margin={2}>
              <Typography variant="h5">Alex Sandro</Typography>
              <Typography variant="span" color="textSecondary">
                Alex Sandro
              </Typography>
            </Box>
          </Box>
          <Button className={classes.btnFollow}>Theo dõi</Button>
        </Grid>
        <Grid container justify="space-between" alignItems="center" style={{marginTop: '40px'}}>
          <div className={classes.reaction}>
            <Typography variant="h5" >
              Nhận xét
            </Typography>
            <ExpandMoreIcon fontSize="large" />
          </div>
          <div className={classes.reaction}>
          <Typography variant="h5" color="textSecondary">
              1
            </Typography>
            <FavoriteIcon className={classes.photoHeart}/>
          </div>
        </Grid>
        <Box className={classes.comments}>
            <CommentItems/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(PhotoDetail);
