import React from "react";
import { Grid, TextField, Typography, withStyles } from "@material-ui/core/";
import style from "../components/assets/style/auth/auth";

const Input = (props) => {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

  const { classes } = props;
  console.log(type)
  return (
    <Grid className={classes.formItem}>
      {" "}
      {/* {label && <Typography color="textSecondary">{label}</Typography>} */}
      <TextField
        {...field}
        fullWidth
        label ={label?label:''}
        placeholder={placeholder}
        type={type}
        className={showErr ? "form-control invalid" : "form-control"}
        // required
      />{" "}
      {showErr && (
        <Typography color="error" margin="normal">
          {errors[name]}
        </Typography>
      )}
    </Grid>
  );
};

export default withStyles(style)(Input);
