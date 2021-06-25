import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "../FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import firebase from "../../firebase"
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

export default function BasicInfo() {
  const classes = useStyles();
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const [age, setAge] =useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //adds test data into the database
    const db = firebase.firestore();
    db.collection("BusinessBasicInfo").add({
      BusinessID: 234567,
      Age: age,
      Location: location,
      Language: language,
      NumPeople:1
    })
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
          <Grid item>
            <Typography className={classes.sideBarText}>
              Basic Information
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" xs={12} md={9} spacing={5}>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>Location*</Typography>
                <Typography className={classes.exampleText}>
                  Example: Brooklyn,NY
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                fullWidth={true}
                required
                variant="outlined"
                className={classes.textField}
                value={location}
                onInput={(e) => setLocation(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>
                  Language*
                </Typography>
                <Typography className={classes.exampleText}>
                  Example: English
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                fullWidth={true}
                required
                variant="outlined"
                className={classes.textField}
                value={language}
                onInput={(e) => setLanguage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>How many Creators?*</Typography>
                <Typography className={classes.exampleText}>
                  Example: One Person
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                fullWidth={true}
                required
                variant="outlined"
                className={classes.aboutTextField}
                value={groupNumber}
                onInput={(e) => setGroupNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={12} alignItems="flex-start">
            <Grid item container direction="column" xs={12} md={4}>
              <Grid item>
                <Typography className={classes.headingText}>
                  Age*
                </Typography>
                <Typography className={classes.exampleText}>
                  Example: 18-30
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} align="center">
              <TextField
                fullWidth={true}
                required
                variant="outlined"
                className={classes.textField}
                value={age}
                onInput={(e) => setAge(e.target.value)}
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
                to="/titles-and-description"
                className={classes.backButton}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={8} align="center">
              <Button onClick={handleSubmit} 
              className={classes.saveButton}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
