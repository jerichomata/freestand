import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import ProfilePage from "./ProfilePage";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "284px",
    backgroundColor: "#292B2F",
    color: "white",
    textAlign: "left",
  },
  cardContent: {
    marginTop: "-14%",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "48px",
    width: "48px",
    backgroundColor: "#292B2F",
  },
  media: {
    height: "130px",
    width: "284px",
  },
  profilePic: {
    height: "34px",
    width: "34px",
  },
  profileName: {
    color: "white",
    fontWeight: 700,
    fontSize: "15.48px",
  },
  profileDesc: {
    color: "#B9BBBE",
    fontWeigth: 500,
    fontSize: "13.55px",
    lineHeight: "16.51px",
  },
}));

export default function ProfileCard() {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <Link href="/profile">
            <CardMedia
              className={classes.media}
              image="../static/images/ProfileHeader.png"
            />
            <CardContent className={classes.cardContent}>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.profilePic}
                  image="../static/images/ProfilePic.png"
                />
              </Paper>
              <Typography
                className={classes.profileName}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Sweath With Hannah
              </Typography>
              <Typography className={classes.profileDesc}>
                Virtual HIT classes, group and privates. Have fun and get a
                workout in at the same time! Join our community today!
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Fragment>
  );
}
