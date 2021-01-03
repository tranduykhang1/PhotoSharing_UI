import {
  Avatar,
  Button,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../assets/style/home/photo";
import { getCommentById, removeComment } from "../../action/Comment";
import { Skeleton } from "@material-ui/lab";

const CommentItems = (props) => {
  const dispatch = useDispatch();

  const { photoId } = props;
  const data = useSelector((state) => state.comment.listComments);
  const isPost = useSelector((state) => state.comment.commentResponse);
  const isRemove = useSelector((state) => state.comment.removeResponse);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (photoId) {
      dispatch(getCommentById(photoId[0]._id));
    }
  }, [photoId]);

  useEffect(() => {
    if (photoId) {
      dispatch(getCommentById(photoId[0]._id));
    }
  }, [isPost, isRemove]);

  const handleRemove = (comment) => {
    dispatch(removeComment(data[0]._id, comment.comments.id));
  };

  const style = {
    avatar: {
      height: "40px",
      width: "40px",
    },
    container: {
      margin: "20px 0",
    },
    content: {
      margin: "0px 20px",
      border: "1px solid gainsboro",
      borderRadius: "10px",
      padding: "5px 10px",
      wordWrap: "break-word",
      overflow: "hidden",
      fontSize: "15px",
    },
    btnRm: {
      textTransform: "inherit",
      fontSize: ".8em",
      marginLeft: "-15px",
      color: "grey",
      border: "none",
      backgroundColor: "white",
      cursor: "pointer",
    },
  };
  let comments = "Trống";
  if (data) {
    comments = data.map((c, index) => {
      return (
        <Grid container style={style.container} key={index}>
          <div>
            <Avatar src={c.users[0].avatar} alt="Avatar" style={style.avatar}>
              {c.users[0].last_name.split("")[0]}
            </Avatar>
          </div>
          <div style={style.content}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              {c.users[0].first_name + " " + c.users[0].last_name}
            </Typography>
            <div>
              <Typography variant="subtitle2">{c.comments.content}</Typography>
            </div>
          </div>
          {currentUser ? (
            c.users[0]._id === currentUser._id ? (
              <button
                color="default"
                style={style.btnRm}
                onClick={() => handleRemove(c)}
              >
                Xoá
              </button>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </Grid>
      );
    });
  }

  return <Grid>{comments}</Grid>;
};

export default withStyles(style)(CommentItems);
