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
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import {useHistory, useRouteMatch} from 'react-router-dom'

const PostItems = (props) => {
  const data = [
    'https://source.unsplash.com/random',
    'https://picsum.photos/200/300',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://picsum.photos/200/300',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://picsum.photos/200/300',
    'https://source.unsplash.com/random',
    'https://picsum.photos/200/300',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
  ];

  const { classes } = props;

  const history = useHistory();
  const {url} = useRouteMatch();

  const image = "https://source.unsplash.com/random";

  const breakpointColumnsObj = {
    default: 6,
    1100: 3,
    700: 2,
    500: 1,
  };


  const posts = data.map((d, index) => {
    return (
      <Card
        className={classes.cardItems}
        key={index}

      >
        <Box display="flex" className={classes.albumOption}>
          <NativeSelect name="age" className={classes.select}>
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <Button className={classes.saveImg}>Save</Button>
        </Box>
        <div >
          <img src={d} title="Paella dish" className={classes.image} />
        </div>
        <Box display="flex" className={classes.bottomOption}>
          <Button color="primary" className={classes.showUser}>
            User name
          </Button>
          <Link style={{ display: "flex" }}>
            <FavoriteIcon style={{ color: "white" }} />
            <Typography style={{ color: "white" }}>1</Typography>
          </Link>
        </Box>
        <Grid className={classes.photoTitle}>
        <Typography variant="h6" className={classes.textTitle}>Title</Typography>
        </Grid>
      </Card>
    );
  });
  return (
    <Grid container className={classes.cardContainer}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.cardColumn} // default ''
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {posts}
      </Masonry>
    </Grid>
  );
};

export default withStyles(style)(PostItems);
