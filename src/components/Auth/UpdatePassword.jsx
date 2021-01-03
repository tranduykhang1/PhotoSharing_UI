import React from "react";
import { FastField, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../customField/Input";
import { updatePassword } from "../../action/Auth";
import * as yup from "yup";
import {
  Button,
  Grid,
  LinearProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import style from "../assets/style/auth/auth";
import { NotificationManager } from "react-notifications";

function UpdatePassword(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.auth.data);

  console.log(data);
  useEffect(() => {
    document.title="Cập nhật mật khẩu"

    if (data) {
      if (data.data === "Password updated") {
        setLoading(false);
        NotificationManager.success("Cập nhật thành công", "Chuyển trang sau 3s", 3000)
        setTimeout(() =>{
          history.push('/login')
        },3000)
      }
    }
  }, [data]);

  const initialValue = {
    new_password: "",
    confirm_password: "",
  };
  const submitForm = (value) => {
    setErr(false);
    if (value.confirm_password !== value.new_password) {
      setErr(true);
    } else {
      setLoading(true);
      dispatch(updatePassword(value));
    }
  };

  const validationSchema = yup.object().shape({
    new_password: yup
      .string()
      .required("(*) Bắt buộc nhập")
      .min(6, "Mật khẩu từ 6-15 kí tự")
      .max(15, "Mật khẩu từ 6-15 kí tự"),
    confirm_password: yup
      .string()
      .required("(*) Bắt buộc nhập")
      .min(6, "Mật khẩu từ 6-15 kí tự")
      .max(15, "Mật khẩu từ 6-15 kí tự"),
  });

  const { classes } = props;
  return (
    <Grid md={4} justify="center" style={{ margin: "100px auto" }}>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(value) => submitForm(value)}
      >
        {(formikProps) => {
          return (
            <Form className={classes.updatePasswordForm}>
              <Typography
                align="center"
                variant="h5"
                style={{ color: "black" }}
              >
                Nhập Email để lấy lại mật khẩu
              </Typography>
              <FastField
                type="password"
                name="new_password"
                label="Mật khẩu mới:"
                placeholder="Nhập mật khẩu..."
                component={Input}
              />
              <FastField
                type="password"
                name="confirm_password"
                label="Nhập lại mật khẩu:"
                placeholder="Nhập mật khẩu..."
                component={Input}
              />
              {err ? (
                <Typography
                  color="error"
                  align="center"
                  style={{ margin: "10px 0" }}
                >
                  Mật khẩu không khớp
                </Typography>
              ) : (
                ""
              )}
              <Grid md={12}>
                {!loading ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="default"
                  >
                    Cập nhật
                  </Button>
                ) : (
                  <LinearProgress color="secondary" />
                )}
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
}

export default withStyles(style)(UpdatePassword);
