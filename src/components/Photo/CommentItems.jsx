import { Avatar, Grid, Typography, withStyles } from "@material-ui/core";
import React from "react";
import style from "../assets/style/home/photo";

const CommentItems = (props) => {
  const style = {
    avatar: {
      height: "70px",
      width: "70px",
    },
    container: {
        margin: '20px 0'
    },
    content: {
        margin: '0px 20px',
        border: '1px solid gainsboro',
        borderRadius: '10px',
        padding: '15px 20px',
        wordWrap: 'break-word',
        overflow: 'hidden'
    }
  };

  const { classes } = props;
  return (
    <Grid container style={style.container}>
      <div>
        <Avatar src="" alt="Avatar" style={style.avatar}>
          Khang
        </Avatar>
      </div>
      <div style={style.content}>
            <Typography variant="h6" style={{fontWeight:'bold'}}>Hello</Typography>
            <div>
            <Typography variant="span">noi dung binh luan nam o day ne hihi</Typography>
            </div>
      </div>
    </Grid>
  );
};

export default withStyles(style)(CommentItems);
