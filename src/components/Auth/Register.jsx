import React from "react";
import "../assets/style/auth/auth.css";
import logo from "../assets/img/logo.png";

import { register } from "../../action/Auth";
import Input from "../../customField/Input";
import { FastField, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as yup from "yup";
import style from "../assets/style/auth/auth";
import {
  Avatar,
  Button,
  Grid,
  LinearProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import { NotificationManager } from "react-notifications";

function Register(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => state.auth.data);

  useEffect(() => {
    document.title="Đăng kí"
    if (data) {
      if (data.status === 200) {
        if (data.data === "Email exits") {
          setLoading(false);
          NotificationManager.warning("Tên đăng nhập đã tồn tại");
        } else {
          setLoading(true);
          history.push("/confirm-email");
        }
      }
    }
  }, [data]);

  const submitForm = (value) => {
    if (value.password !== value.password_confirm) {
      setLoading(false);
      NotificationManager.warning("Mật khẩu không khớp");
    } else {
      setLoading(true);
      dispatch(register(value));
    }
  };

  const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = yup.object().shape({
    first_name: yup.string().required("(*) Bắt buộc nhập"),
    last_name: yup.string().required("(*) Bắt buộc nhập"),
    email: yup.string().email("(*) Phải là email, vd: nguyenvana@xxx.xxx"),
    password: yup
      .string()
      .required("(*) Bắt buộc nhập")
      .min(6, "Mật khẩu từ 6-15 kí tự")
      .max(16, "Mật khẩu từ 6-15 kí tự"),
    password_confirm: yup
      .string()
      .required("(*) Bắt buộc nhập")
      .min(6, "Mật nhập lại từ 6-15 kí tự")
      .max(16, "Mật nhập lại từ 6-15 kí tự"),
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
            <Grid
              item
              xs={false}
              sm={4}
              md={6}
              md={6}
              className={classes.image}
            >
              {" "}
            </Grid>
            <Grid
              item
              direction="row"
              justify="center"
              xs={8}
              sm={8}
              md={6}
              elevation={6}
              square
              className={classes.registerForm}
            >
              <Grid md={12} sm={12} align="center">
                <Avatar alt="Logo" src={logo} className={classes.logo} />
              </Grid>
              <Form className="mt-5 p-0" className={classes.formControl}>
                <Typography
                  variant="h4"
                  align="center"
                  color="secondary"
                  className={classes.loginTitle}
                >
                  Đăng kí
                </Typography>
                <FastField
                  name="first_name"
                  type="text"
                  component={Input}
                  label="Họ: "
                  placeholder="Nhập họ..."
                />
                <FastField
                  name="last_name"
                  type="text"
                  component={Input}
                  label="Tên: "
                  placeholder="Nhập tên..."
                />
                <FastField
                  name="email"
                  type="email"
                  component={Input}
                  label="Email đăng nhập: "
                  placeholder="Nhập Email..."
                />
                <FastField
                  name="password"
                  component={Input}
                  label="Mật khẩu:"
                  placeholder="Nhập mật khẩu..."
                  type="password"
                />
                <FastField
                  name="password_confirm"
                  component={Input}
                  label="Nhập lại khẩu:"
                  placeholder="Nhập mật khẩu..."
                  type="password"
                />

                <div className="form-group col-sm-6 mx-auto">
                  {!loading ? (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                    >
                      Sign In
                    </Button>
                  ) : (
                    <LinearProgress color="secondary" />
                  )}
                </div>
                <Grid md={12} align="center" style={{ marginTop: "20px" }}>
                  <Link to="/login" className={classes.link}>
                    Đăng nhập
                  </Link>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}

export default withStyles(style)(Register);
