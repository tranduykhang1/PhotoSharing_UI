import React from "react";
import { Grid, TextField, Typography, withStyles } from "@material-ui/core/";
import style from "../components/assets/style/auth/auth";

const Input = (props) => {
  const {
    field,
    form,
    type,
    label,
    placeholder,
    id,
    disabled,
    multiline,
  } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];

  const { classes } = props;
  return (
    <Grid className={classes.formItem}>
      {" "}
      {/* {label && <Typography color="textSecondary">{label}</Typography>} */}{" "}
      <TextField
        {...field}
        fullWidth
        size="small"
        variant="outlined"
        label={label ? label : ""}
        placeholder={placeholder}
        type={type}
        multiline={multiline}
        id={id}
        className={showErr ? "form-control invalid" : "form-control"}
        // required
      />{" "}
      {showErr && (
        <Typography color="error" margin="normal" variant="span">
          {" "}
          {errors[name]}{" "}
        </Typography>
      )}{" "}
    </Grid>
  );
};

export default withStyles(style)(Input);
