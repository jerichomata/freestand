import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function CategoryProfiles(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        style={{ marginTop: "2%" }}
        justify="space-between"
        spacing={5}
      >
        <Grid item xs={12}>
          <Typography className={classes.categoryHeading}>{props.category}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.filterSubHeading}>
            44 results based on your filters
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <ProfileCard></ProfileCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}
