import { Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import SimilarCreator from "./SimilarCreator";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  root: {},
  profileName: {
    fontWeight: 700,
    fontSize: "35px",
  },
  profileDesc: {
    color: "#C2C2C2",
    fontWeight: 400,
    fontSize: "16px",
  },
  button: {
    fontSize: "28px",
    fontWeight: 400,
    color: "white",
    textTransform: "none",
  },
  paperClass: {
    backgroundColor: "#303236",
    color: "#828282",
    marginTop: "10%",
  },
  media: {
    height: "50px",
    width: "50px",
  },
  linkButtons: {
    color: "#868686",
    borderColor: "#6C6C6C",
    width: "334px",
    height: "66px",
    borderRadius: "10px",
    fontSize: "25px",
    fontWeigth: 500,
    textTransform: "none",
  },
  profileHeader: {
    width: "688px",
    height: "262px",
  },
  profilePic: {
    width: "125px",
    height: "125px",
  },
  profilePicPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "138px",
    height: "138px",
    borderRadius: "50%",
    marginTop: "-10%",
  },
  informationFont: {
    fontWeight: 400,
    fontSize: "18px",
  },
  profilePhotoUpload: {
    width: "125px",
    height: "80px",
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container direction="row">
        <Grid
          item
          container
          xs={12}
          lg={8}
          direction="column"
          alignItems="center"
        >
          <Typography className={classes.profileName}>
            Sweat with Hannah
          </Typography>
          <Typography className={classes.profileDesc}>
            Virtual fitness / dance classes for all ages and levels
          </Typography>
          <Grid item>
            <CardMedia
              className={classes.profileHeader}
              image="../static/images/ProfileHeaderBig.png"
            />
            <Paper className={classes.profilePicPaper}>
              <CardMedia
                className={classes.profilePic}
                image="../static/images/ProfilePicBig.png"
              />
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            spacing={0}
            alignItems="center"
          >
            <Grid item xs={12} md={4} align="center">
              <Paper
                className={classes.paperClass}
                style={{ height: "150px", width: "250px" }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography style={{ fontWeight: 600, fontSize: "16px" }}>
                      Info
                    </Typography>
                  </Grid>

                  <Grid item container direction="row">
                    <Grid item xs={2} align="center">
                      <LocationOnIcon />
                    </Grid>

                    <Grid
                      item
                      xs={10}
                      className={classes.informationFont}
                      container
                      direction="row"
                      justify="flex-start"
                      spacing={0}
                    >
                      <Typography>Based in</Typography>
                      <Typography style={{ color: "white", marginLeft: "2%" }}>
                        Los Angeles
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container direction="row">
                    <Grid item xs={2} align="center">
                      <LanguageIcon />
                    </Grid>

                    <Grid
                      item
                      xs={10}
                      className={classes.informationFont}
                      container
                      direction="row"
                      justify="flex-start"
                      spacing={0}
                    >
                      <Typography>Speaks</Typography>
                      <Typography style={{ color: "white", marginLeft: "2%" }}>
                        English
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container direction="row">
                    <Grid item xs={2} align="center">
                      <BookmarksIcon />
                    </Grid>

                    <Grid
                      item
                      xs={10}
                      className={classes.informationFont}
                      container
                      direction="row"
                      justify="flex-start"
                      spacing={0}
                    >
                      <Typography>Category</Typography>
                      <Typography style={{ color: "white", marginLeft: "2%" }}>
                        Fitness
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} align="center">
              <Paper
                className={classes.paperClass}
                style={{ width: "290px", height: "225px" }}
              >
                <Grid container spacing={2} direction="row" justify="center">
                  <Grid item xs={12}>
                    <Typography style={{ fontWeight: 600, fontSize: "16px" }}>
                      Photos
                    </Typography>
                  </Grid>
                  <Grid item align="center" xs={5}>
                    <CardMedia
                      className={classes.profilePhotoUpload}
                      image="../static/images/ProfilePhotoUpload.png"
                    />
                  </Grid>
                  <Grid item align="center" xs={5}>
                    <CardMedia
                      className={classes.profilePhotoUpload}
                      image="../static/images/ProfilePhotoUpload.png"
                    />
                  </Grid>
                  <Grid item align="center" xs={5}>
                    <CardMedia
                      className={classes.profilePhotoUpload}
                      image="../static/images/ProfilePhotoUpload.png"
                    />
                  </Grid>
                  <Grid item align="center" xs={5}>
                    <CardMedia
                      className={classes.profilePhotoUpload}
                      image="../static/images/ProfilePhotoUpload.png"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid item>
            <Paper
              className={classes.paperClass}
              style={{ marginTop: "5%", width: "688px", height: "286px" }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
              >
                <Grid item xs={10} align="flex-start">
                  <Typography>About</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    style={{
                      fontWeight: 500,
                      fontSize: "16.5px",
                      color: "#EFEFEF",
                    }}
                  >
                    I’m a group fitness instructor and personal trainer in Los
                    Angeles. Sweat with Hannah came to fruition as a need for
                    exercise, a sense of community, and positivity during the
                    pandemic. In a time of uncertainty, I was able to connect
                    with so many women, taking 45 minutes out of the day to
                    focus on nothing but the workout.If you’re looking for a
                    successful burn in the comfort of your own home, look no
                    further. Taking 45 minutes out of the day to focus on
                    nothing but the workout.If you’re looking for a successful
                    burn in the comfort of your own home, look no further.{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={12}
          lg={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item container direction="row" justify="space-evenly">
            <Button
              xs={2}
              className={classes.button}
              startIcon={<FavoriteBorderIcon />}
            >
              Save
            </Button>
            <Button xs={2} className={classes.button} startIcon={<ShareIcon />}>
              Share
            </Button>
          </Grid>
          <Grid item>
            <Paper className={classes.paperClass} style={{}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography style={{ fontWeight: 500, fontSize: "18px" }}>
                    Similiar Creators
                  </Typography>
                </Grid>
                <SimilarCreator />
                <SimilarCreator />
                <SimilarCreator />
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paperClass} style={{}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography style={{ fontWeight: 500, fontSize: "16.96px" }}>
                    Links
                  </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button className={classes.linkButtons} variant="outlined">
                    Website
                  </Button>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button className={classes.linkButtons} variant="outlined">
                    Instagram
                  </Button>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button className={classes.linkButtons} variant="outlined">
                    Twitter
                  </Button>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button className={classes.linkButtons} variant="outlined">
                    YouTube
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
