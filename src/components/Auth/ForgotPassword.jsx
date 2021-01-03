import React from "react";

import "../assets/style/auth/auth.css"
import { FastField, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../customField/Input";
import { forgotPassword } from "../../action/Auth";
import {
  Button,
  Grid,
  LinearProgress,
  Typography,
  withStyles,
} from "@material-ui/core";
import style from "../assets/style/auth/auth";

function ForgotPassword(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.auth.data);

  useEffect(() => {
    document.title="Quên mật khẩu"

    if (data) {
      if (data.status === 200) {
        setLoading(false);
        history.push("/confirm-email");
      }
    }
  }, [data]);

  const initialValue = {
    email: "",
  };
  const submitForm = (value) => {
    setLoading(true);
    dispatch(forgotPassword(value));
  };

  const { classes } = props;

  return (
    <Grid container md={12} justify="center" style={{ marginTop: "100px" }}>
      <Formik
        initialValues={initialValue}
        onSubmit={(value) => submitForm(value)}
      >
        {(formikProps) => {
          return (
            <Form className={classes.forgotPasswordForm}>
              <Typography variant="h5" style={{color: 'black'}}>
                Nhập Email để lấy lại mật khẩu
              </Typography>
              <FastField
                type="email"
                name="email"
                label="Địa chỉ Email:"
                placeholder="Nhập email..."
                component={Input}
              />
              <div className="form-group col-sm-6 mx-auto text-center">
                {!loading ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="default"
                  >
                    Gửi
                  </Button>
                ) : (
                  <LinearProgress color="secondary" />
                )}
              </div>
              <Grid md={12} style={{marginTop: "10px"}} align="center">
                <Link to="/login" className={classes.link}>Quay lại đăng nhập</Link>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
}

export default withStyles(style)(ForgotPassword);
