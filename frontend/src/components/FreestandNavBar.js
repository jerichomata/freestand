import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { FormHelperText, Toolbar } from "@material-ui/core";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    position: "relative",
  },
  freestandGridItem: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  freestandName: {
    color: "white",
    fontWeight: 700,
    fontSize: 35,
  },
}));

export default function FreestandNavBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Grid alignItems="center" container>
            <Grid item xs={12} md={8} className={classes.freestandGridItem}>
              <Typography>
                <Link href="/" className={classes.freestandName}>
                  Freestand
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
