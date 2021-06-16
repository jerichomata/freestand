import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttons: {
    backgroundColor: "#252525",
    color: "#F3F4FE",
    fontWeight: 400,
    fontSize: "17px",
    borderRadius: "9.5px",
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
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/cooking">
            Cooking
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/meditation">
            Meditation
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/fitness">
            Fitness
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/therapy">
            Therapy
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/dance">
            Dance
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/yoga">
            Yoga
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.buttons}
            component={Link}
            to="/nutritionist"
          >
            Nutrition
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttons} component={Link} to="/pilates">
            Pilates
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}
