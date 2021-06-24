import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { FormHelperText, Toolbar } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "../FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {
    width: "432px",
    height: "66px",
    backgroundColor: "#FF5924",
    color: "white",
    borderRadius: "10px",
    fontWeight: 400,
    fontSize: "22.41px",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "#FF5924",
    },
  },
}));

export default function CategoriesAndTags() {
  const classes = useStyles();
  return (
    <Fragment>
      <FreestandNavBar />
      <Button
        className={classes.saveButton}
        component={LinkReact}
        to="/titles-and-description"
      >
        Save
      </Button>
    </Fragment>
  );
}
