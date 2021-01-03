import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import Input from "../../customField/Input";
import { NavLink } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import React, { useState, useEffect } from "react";
import style from "../assets/style/home/user";
import { updateProfile, getCurrentUser } from "../../action/User";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfile = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const [baseUrlImg, setUrl] = useState("");

  const isSuccess = useSelector((state) => state.user.updateRes);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (isSuccess) {
      NotificationManager.success("Cập nhật thành công!!!");
      dispatch(getCurrentUser());
    }
  }, [isSuccess]);


  const submitForm = (values) => {
    dispatch(updateProfile(values));
  };

  let initialValues = {};
  if (!currentUser) {
    initialValues = {};
  } else {
    initialValues = {
      gender: currentUser.gender,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      user_name: currentUser.user_name,
      bio: currentUser.bio,
      image: currentUser.avatar,
      imgChange: "update",
      location: currentUser.location,
    };
  }
  const selectGender = (e) => {
    initialValues.gender = e.target.value;
  };

  const handleChange = (e) => {
    let img = e.target.files[0];
    initialValues.image = img;
    initialValues.imgChange = "upload";
    setUrl(URL.createObjectURL(img));
  };

  return currentUser ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => submitForm(values)}
    >
      {(formikProps) => {
        return (
          <Grid xs={8} md={6} className={classes.updateProfile}>
            <Grid container>
              <Grid style={{ display: "block" }} md={4} sm={3}>
                <MenuList>
                  <MenuItem>
                    <NavLink
                      to="/profile/update"
                      activeClassName="menu-active"
                      style={{ margin: "0 7%", fontWeight: "bold" }}
                    >
                      Chỉnh sửa thông tin
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/update-password"
                      style={{ margin: "0 7%", fontWeight: "bold" }}
                    >
                      Đổi mật khẩu
                    </NavLink>
                  </MenuItem>
                </MenuList>
              </Grid>
              <Grid
                md={8}
                sm={9}
                style={{ borderLeft: "1px solid #e0e0e0", padding: "0 20px" }}
              >
                <Form style={{ margin: "auto" }}>
                  <Grid container alignItems="center">
                    <Avatar
                      src={baseUrlImg ? baseUrlImg : currentUser.avatar}
                      alt="anh dai dien"
                      style={{ width: "80px", height: "80px" }}
                    >
                      {currentUser.last_name.split("")[0]}
                    </Avatar>
                    <Box display="none">
                      <TextField
                        id="image"
                        name="image"
                        type="file"
                        // component={Input}
                        label="Họ:"
                        placeholder="Nhập họ..."
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                    </Box>
                    <label htmlFor="image" className={classes.labelImage}>
                      Chọn ảnh
                    </label>
                  </Grid>

                  <Grid container xs={12} md={12}>
                    <FastField
                      name="first_name"
                      type="text"
                      component={Input}
                      label="Họ:"
                      placeholder="Nhập họ..."
                    />
                    <FastField
                      name="last_name"
                      type="text"
                      component={Input}
                      label="Tên: "
                      placeholder="Nhập tên..."
                    />
                  </Grid>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Giới tính:</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      style={{ display: "block" }}
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="Nam"
                        onClick={selectGender}
                        // checked={initialValues.gender ? true : false}
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Nữ"
                        onClick={selectGender}
                        // checked={initialValues.gender == 1 ? true : false}
                      />
                    </RadioGroup>
                  </FormControl>
                  <FastField
                    name="user_name"
                    type="text"
                    component={Input}
                    label="Tên hiển thị: "
                    placeholder="Nhập tên mà bạn muốn hiển thị..."
                  />

                  <FastField
                    name="bio"
                    type="text"
                    component={Input}
                    label="Giới thiệu: "
                    placeholder="Giới thiệu về bạn..."
                    multiline={true}
                  />
                  <FastField
                    name="location"
                    type="text"
                    component={Input}
                    label="Nơi ở: "
                    placeholder="Vd: Viet Nam,..."
                  />
                  <Grid container xs={12} md={12} style={{ padding: "10px 0" }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Lưu
                    </Button>
                  </Grid>
                </Form>
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  ) : null;
};

export default withStyles(style)(UpdateProfile);
