import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "../FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {},
  sideBarText: {
    fontWeight: 500,
    fontSize: "20px",
  },
  headingText: {
    fontWeight: 500,
    fontSize: "18px",
    color: "#CECECE",
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
  profilePicPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "138px",
    height: "138px",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  profilePic: {
    width: "200px",
    height: "200px",
  },
  textField: {
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
  },
  aboutTextField: {
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
  },
  addButton: {
    backgroundColor: "#7E7E7E",
    borderRadius: "10px",
    width: "65px",
    height: "65px",
    "&:hover": {
      backgroundColor: "#7E7E7E",
    },
  },
}));

export default function PhotosAndVideos() {
  const classes = useStyles();
  const [file1, setFile1] = useState(undefined);
  const [file2, setFile2] = useState(undefined);
  const [file3, setFile3] = useState(undefined);
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(true);
  const [display3, setDisplay3] = useState(true);
  const [photoList, setPhotoList] = useState([]);
  const profileUpload = (event) => {
    setFile1(URL.createObjectURL(event.target.files[0]));
    setDisplay1(false);
  };
  const bannerUpload = (event) => {
    setFile2(URL.createObjectURL(event.target.files[0]));
    setDisplay2(false);
  };
  const videoUpload = (event) => {
    setFile3(URL.createObjectURL(event.target.files[0]));
    setDisplay3(false);
  };
  function onAddBtnClick(event) {
    setPhotoList(
      photoList.concat(
        <PhotoInput
          url={URL.createObjectURL(event.target.files[0])}
          key={[photoList].length}
        />
      )
    );
  }
  const PhotoInput = (props) => {
    return (
      <Grid item>
        <img
          src={props.url}
          style={{ height: 200, width: 200, borderRadius: "10px" }}
        />
      </Grid>
    );
  };
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
          <Grid item>
            <Typography className={classes.sideBarText}>Links</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.sideBarText}>Contact</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.sideBarText}>
              Photos {"&"} Videos
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={12}
          md={9}
          spacing={3}
          alignItems="flex-start"
        >
          <Grid
            item
            container
            direction="row"
            spacing={3}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography className={classes.headingText}>
                Profile Photo:{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.exampleText}>
                Upload a profile photo, recommended dimensions 200x200
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            spacing={3}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <input
                accept="image/*"
                hidden
                id="raised-button-file"
                multiple
                type="file"
                onChange={profileUpload}
              />
              <label htmlFor="raised-button-file">
                <Paper className={classes.profilePicPaper}>
                  <Button
                    style={{
                      width: "125px",
                      height: "125px",
                      backgroundColor: "#C4C4C4",
                      borderRadius: "50%",
                      textTransform: "none",
                    }}
                    component="span"
                    align="center"
                  >
                    {file1 && (
                      <img
                        style={{ height: 125, width: 125, borderRadius: "50%" }}
                        src={file1}
                      />
                    )}
                    {display1 && "add photo 200x200"}
                  </Button>
                </Paper>
              </label>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={3}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography className={classes.headingText}>
                Banner Photo:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.exampleText}>
                Upload a banner photo, recommended dimensions 700x300
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <input
              accept="image/*"
              hidden
              id="raised-banner-file"
              multiple
              type="file"
              onChange={bannerUpload}
            />
            <label htmlFor="raised-banner-file">
              <Button
                style={{
                  width: "700px",
                  height: "300px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                component="span"
                align="center"
              >
                {file2 && (
                  <img
                    style={{ height: 300, width: 700, borderRadius: "10px" }}
                    src={file2}
                  />
                )}
                {display2 && "add photo 700x300"}
              </Button>
            </label>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={3}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography className={classes.headingText}>
                Intro Video:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.exampleText}>
                Upload an intro video up to 1 minute long (Optional)
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <input
              accept="video/*"
              hidden
              id="raised-video-file"
              multiple
              type="file"
              onChange={videoUpload}
            />
            <label htmlFor="raised-video-file">
              <Button
                style={{
                  width: "342px",
                  height: "211px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "5px",
                  textTransform: "none",
                }}
                component="span"
                align="center"
              >
                {file3 && (
                  <video width="342" height="240" controls>
                    <source src={file3} />
                  </video>
                )}
                {display3 && "add video"}
              </Button>
            </label>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={3}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Typography className={classes.headingText}>Photos:</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.exampleText}>
                Add photos that will be displayed on your profile
              </Typography>
            </Grid>
          </Grid>

          <Grid item container direction="row" spacing={3} alignItems="center">
            {photoList}
            <input
              accept="image/*"
              hidden
              id="add-pic-file"
              multiple
              type="file"
              onChange={onAddBtnClick}
            />
            <label htmlFor="add-pic-file">
              <Button
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                component="span"
                align="center"
              >
                <AddIcon fontSize="large" />
              </Button>
            </label>
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
              <Button className={classes.backButton}>Back</Button>
            </Grid>
            <Grid item xs={12} sm={8} align="center">
              <Button className={classes.saveButton}>Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
