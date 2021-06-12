import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";
const useStyles = makeStyles((theme) => ({
  root: {},
  featuredHeading: {
    fontWeight: 700,
    fontSize: "25px",
  },
}));

export default function FeaturedProfiles() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        style={{ marginTop: "5%" }}
        justify="space-between"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography className={classes.featuredHeading}>Featured</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}
