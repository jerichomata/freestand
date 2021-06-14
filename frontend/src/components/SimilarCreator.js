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
const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: "50px",
    width: "50px",
  },
}));

export default function SimilarCreator() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container direction="row">
        <Grid item xs={2} align="center">
          <CardMedia
            component="img"
            className={classes.media}
            image={"../static/images/ProfilePic.png"}
          />
        </Grid>

        <Grid item container direction="column" xs={10}>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#E1E1E1",
            }}
          >
            City Sweat
          </Typography>
          <Typography style={{ fontWeight: 400, fontSize: "15px" }}>
            High Intensity fitness and dance classes...
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}
