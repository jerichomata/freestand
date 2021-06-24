import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "../FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {},
  sideBarText: {
    fontWeight: 500,
    fontSize: "20px",
  },
  headingText: {
    fontWeight: 500,
    fontSize: "18px",
  },
  exampleText: {
    fontWeight: 300,
    fontSize: "18px",
    color: "#7E7E7E",
    lineHeight: "21px",
  },
  backButton: {
    maxWidth: "148px",
    maxHeight: "48px",
    minWidth: "148px",
    minHeight: "48px",
    borderRadius: "50px",
    backgroundColor: "#C4C4C4",
    color: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
  saveButton: {
    maxWidth: "215px",
    maxHeight: "83px",
    minWidth: "215px",
    minHeight: "83px",
    backgroundColor: "#FF5924",
    color: "white",
    borderRadius: "10px",
    fontWeight: 400,
    fontSize: "19.41px",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "#FF5924",
    },
  },
  textField: {
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
  },
  aboutTextField: {
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
  },
}));

export default function TitlesAndDesc() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [about, setAbout] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Fragment>
      <FreestandNavBar />

      <Grid container justify="space-evenly">
        <Grid item container direction="column" xs={12} md={2} spacing={3}>
          <Grid item>
            <Typography className={classes.sideBarText}>
              Categories and Tags
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.sideBarText}>
              Titles and Description
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" xs={12} md={9} spacing={5}>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>Title*</Typography>
                <Typography className={classes.exampleText}>
                  Example: Sweat from Home
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                fullWidth={true}
                required
                variant="outlined"
                className={classes.textField}
                value={title}
                onInput={(e) => setTitle(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>
                  Sub Title*
                </Typography>
                <Typography className={classes.exampleText}>
                  Example: Virtual fitness classes for all ages and levels
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                fullWidth={true}
                required
                variant="outlined"
                className={classes.textField}
                value={subTitle}
                onInput={(e) => setSubTitle(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>About*</Typography>
                <Typography className={classes.exampleText}>
                  Example: Hello my name is John and I started sweat from home 1
                  year ago after being in the fitness world for 5 years working
                  as a personal trainer. Sweat from Home offers group and
                  private classes all from the comfort of your own home...{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                multiline={true}
                fullWidth={true}
                rows={10}
                required
                variant="outlined"
                className={classes.aboutTextField}
                value={about}
                onInput={(e) => setAbout(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="space-evenly"
            spacing={2}
          >
            <Grid item xs={12} sm={4} align="center">
              <Button
                component={LinkReact}
                to="/categories-and-tags"
                className={classes.backButton}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={8} align="center">
              <Button onClick={handleSubmit} className={classes.saveButton}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
