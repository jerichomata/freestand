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
import NavBar from "./NavBar";
import Profile from "./Profile";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function ProfilePage() {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar />
      <Profile />
    </Fragment>
  );
}
