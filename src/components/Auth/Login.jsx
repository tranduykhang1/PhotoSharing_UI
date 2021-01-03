import React from "react";

import logo from "../assets/img/logo.png";
import { FastField, Form, Formik } from "formik";
import Input from "../../customField/Input";
import { googleLogin, login } from "../../action/Auth";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

import style from "../assets/style/auth/auth.js";

import { NotificationManager } from "react-notifications";

//material UI
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
  withStyles,
} from "@material-ui/core/";

function Login(props) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.auth.data);

  useEffect(() => {
    document.title = "Đăng nhập";
    if (data) {
      if (data.status === 200 && data.data !== "Password updated") {
        setLoading(false);
        if (data.data === "Wrong password") {
          NotificationManager.error("Sai mật khẩu!");
        } else if (data.data === "Wrong username") {
          NotificationManager.error("Không tìm thấy tên đăng nhập");
        } else {
          localStorage.setItem("token", data.data);
          window.location.pathname = '/'
        }
      }
    }
  }, [data]);

  const responseGoogle = (res) => {
    dispatch(googleLogin(res.tokenId));
  };

  const submitForm = (value) => {
    setLoading(true);
    dispatch(login(value));
  };

  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Nhập username (email)"),
    password: yup
      .string()
      .required("Nhập mật khẩu")
      .min(6, "Mật khẩu từ 6-15 kí tự")
      .max(16, "Mật khẩu từ 6-15 kí tự"),
  });

  const { classes } = props;
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={(value) => submitForm(value)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;

        return (
          <Grid container xs={8} className={classes.authContainer}>
            <Grid item xs={false} sm={4} md={6} className={classes.image} />
            <Grid
              item
              direction="row"
              justify="center"
              xs={8}
              sm={8}
              md={6}
              elevation={6}
              square
              className={classes.loginForm}
            >
              <Grid md={12} sm={12} align="center">
                <Avatar alt="Logo" src={logo} className={classes.logo} />
              </Grid>
              <Form className={classes.formControl}>
                <Typography
                  variant="h4"
                  align="center"
                  color="primary"
                  className={classes.loginTitle}
                >
                  Đăng nhập
                </Typography>

                <FastField
                  name="email"
                  type="email"
                  component={Input}
                  label="Email đăng nhập: "
                  placeholder="Nhập Email..."
                />

                <FastField
                  name="password"
                  type="password"
                  component={Input}
                  label="Mật khẩu:"
                  placeholder="Nhập mật khẩu..."
                />
                <Grid xs={12} sm={12} md={12}>
                  {!loading ? (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.btnLogin}
                    >
                      Sign In
                    </Button>
                  ) : (
                    <LinearProgress color="secondary" />
                  )}
                  <Grid
                    xs={8}
                    sm={8}
                    md={12}
                    className={classes.registerNow}
                    container
                    direction="row"
                    justify="spae-between"
                  >
                    <Grid item xs>
                      <Link to="/forgot-password" className={classes.link}>
                        Quên mật khẩu
                      </Link>
                    </Grid>
                    <Grid item>
                      <Typography margin="normal" color="primary">
                        {/* Bạn chưa có tài khoản? */}
                        <Link to="/register" className={classes.link}>
                          {" "}
                          Đăng kí ngay
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid md={12} align="center">
                  <Typography color="textSecondary">Hoặc</Typography>
                  <GoogleLogin
                    clientId="183749103002-l64itvh82djkou6tfq1cq1qdvp526vr2.apps.googleusercontent.com"
                    buttonText="Đăng nhập với Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </Grid>
              </Form>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}

Login.propTypes = {};

export default withStyles(style)(Login);
