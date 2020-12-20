import React from "react";
import "../assets/style/auth/auth.css";

import img from "../assets/img/confirm.jpg";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useEffect} from 'react'

export default function ConfirmEmail() {
  const history = useHistory();

  useEffect(() =>{
    document.title="Xác nhận Email"
  },[])


  const style = makeStyles((theme) => ({
    container: {
      margin: "100px auto",
      backgroundColor: "white",
      textAlign: "center",
      padding: "20px 40px",
      borderRadius: "10px",
      boxShadow: "1px 5px 6px 3px #a4a4a4",
    },
    notice: {
      margin: "20px",
    },
  }));
  const classes = style();

  return (
    <Grid md={6} className={classes.container}>
      <img src={img} alt="Anh minh hoa" width="400px" />
      <Typography color="primary" variant="h5" className={classes.notice}>
        Xác nhận Email của bạn!
      </Typography>
      <Typography color="textSecondary">
        Mã xác thực đã được gửi đến Email của bạn
        <br />
        Vui lòng đăng nhập vào Email để xác nhận!
      </Typography>
    </Grid>
  );
}
