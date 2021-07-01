import { Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import SimilarCreator from "./SimilarCreator";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Modal from "./Modal";
import { motion } from "framer-motion";
import {db} from "../firebase"
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
    borderRadius: 10,
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
    width: "100%",
  },
  profilePic: {
    width: "100%",
    border: "solid white 4px",
    borderRadius: "50%",
  },
  profilePicPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    marginTop: "-10%",
  },
  informationFont: {
    fontWeight: 400,
    fontSize: "18px",
  },
  profilePhotoUpload: {
    width: "158px",
    height: "136px",
  },
  contactBtn: {
    backgroundColor: "#C4C4C4",
    borderRadius: "10px",
    color: "black",
    fontWeight: 600,
  },
  tagsBtn: {
    backgroundColor: "#606060",
    color: "white",
    borderRadius: 20,
    fontWeight: 600,
    fontSize: 16,
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [selectedImg, setSelectedImg] = useState(null);
  const [data,setData] = useState("")

  //const db = firebase.firestore()
  const textRef = db.collection("BusinessTitleInfo");

  //replace later with unique ID
  //aka use "where()"
  textRef.doc('oRhXNmTyAuNQ1XcP9QOA').get()
  .then( (doc) => {
    //console.log(doc);
    setData(doc.data());
  })
  .catch(error => console.log(error));
  
  
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
          <Grid item container justify="center" alignItems="center">
            <Grid item xs={8} md={5} container direction="column">
              <Grid item>
                <Typography className={classes.profileName}>
                  {data.Title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.profileDesc}>
                  {data.SubTitle}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button className={classes.contactBtn}>Contact</Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img
              src="../static/images/ProfileHeaderBig.png"
              className={classes.profileHeader}
            />
          </Grid>
          <Grid item container md={9} style={{ marginTop: "-10%" }}>
            <Grid item xs={2} style={{}}>
              <img
                className={classes.profilePic}
                src="../static/images/ProfilePicBig.png"
              />
            </Grid>
          </Grid>

          <Grid
            item
            md={8}
            lg={8}
            container
            direction="row"
            justify="space-between"
            spacing={0}
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={5} align="center">
              <Paper className={classes.paperClass} style={{}}>
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
                        {data.Location}
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
                        {data.Language}
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

            <Grid item xs={12} sm={5} md={5}>
              <Paper className={classes.paperClass}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      style={{ fontWeight: 500, fontSize: "16.96px" }}
                    >
                      Links
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      My Website
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Instagram
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Live Classes
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      YouTube
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      My Udemy Course
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper
              className={classes.paperClass}
              style={{ marginTop: "5%", marginBottom: "5%" }}
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
                  {data.About}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </Grid>

        <Grid
          item
          container
          xs={12}
          lg={4}
          direction="column"
          alignItems="center"
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
                    Categories and Tags
                  </Typography>
                </Grid>
                <Grid item container direction="row">
                  <Grid item>
                    <Button className={classes.tagsBtn}>
                      Fitness {"&"} Exercise
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item>
            <Paper
              className={classes.paperClass}
              style={{ width: "398px", height: 334 }}
            >
              <Grid
                container
                spacing={1}
                direction="row"
                justify="space-evenly"
              >
                <Grid item xs={12}>
                  <Typography style={{ fontWeight: 600, fontSize: "16px" }}>
                    Gallery
                  </Typography>
                </Grid>
                <Grid item>
                  <motion.div
                    layout
                    onClick={() =>
                      setSelectedImg("../static/images/ProfilePhotoUpload.png")
                    }
                  >
                    <motion.img
                      className={classes.profilePhotoUpload}
                      src="../static/images/ProfilePhotoUpload.png"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    layout
                    onClick={() =>
                      setSelectedImg("../static/images/ProfilePhotoUpload.png")
                    }
                  >
                    <motion.img
                      className={classes.profilePhotoUpload}
                      src="../static/images/ProfilePhotoUpload.png"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    layout
                    onClick={() =>
                      setSelectedImg("../static/images/ProfilePhotoUpload.png")
                    }
                  >
                    <motion.img
                      className={classes.profilePhotoUpload}
                      src="../static/images/ProfilePhotoUpload.png"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    layout
                    onClick={() =>
                      setSelectedImg("../static/images/ProfilePhotoUpload.png")
                    }
                  >
                    <motion.img
                      className={classes.profilePhotoUpload}
                      src="../static/images/ProfilePhotoUpload.png"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
