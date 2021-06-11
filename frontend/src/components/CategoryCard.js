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
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#36393f",
  },
  image: {
    height: "136px",
    width: "234px",
  },
}));

export default function ProfileCard(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <Typography
            style={{ fontWeight: 700, fontSize: "16px", color: "white" }}
          >
            {props.title}
          </Typography>
          <CardMedia
            component="img"
            className={classes.media}
            image={
              props.image ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
          />
        </CardActionArea>
      </Card>
    </Fragment>
  );
}
