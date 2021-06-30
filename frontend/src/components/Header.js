import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link as LinkReact } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  heading: {
    fontWeight: 600,
    fontSize: 46,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      lineHeight: "40px",
    },
    "@media (max-width: 420px)": {
      fontSize: 25,
    },
    width: "100%",
    lineHeight: "56px",
  },
  subHeading: {
    width: "90%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    fontWeight: 500,
    fontSize: 25,
    lineHeight: "30px",
  },
  button: {
    borderRadius: "25px",
    width: "100%",
    fontWeight: 400,
    fontSize: 30,
    textTransform: "none",
    lineHeight: "48px",
    backgroundColor: "#8E9AFF",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        className={classes.root}
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid
          item
          xs={12}
          md={8}
          className={classes.blue}
          container
          direction="column"
          spacing={5}
        >
          <Grid item>
            <Typography className={classes.heading}>
              Discover and connect with wellness pros online
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.subHeading}>
              Find any type of virtual wellness pro, from virtual chefs to dance
              instructors. Connect with any pro from any part of the world.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container md={4}>
          <Grid item container justify="center">
            <img src="../static/images/BendingFigure.png" />
          </Grid>
          <Grid item justify="center" container>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              component={LinkReact}
              to="/signup"
            >
              Launch a Profile
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
