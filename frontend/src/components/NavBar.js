import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchBar from "material-ui-search-bar";
import Typography from "@material-ui/core/Typography";
import { FormHelperText, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
export default function NavBar() {
  return (
    <Fragment>
      <AppBar style={{ position: "relative" }}>
        <Toolbar>
          <Grid alignItems="center" container>
            <Grid item md={8}>
              <Typography style={{ fontWeight: 700, fontSize: 35 }}>
                Freestand
              </Typography>
            </Grid>
            <Grid item md={3}>
              <SearchBar></SearchBar>
            </Grid>
            <Grid item md={1} align="center">
              <Button
                style={{
                  fontFamily: [['"Montserrat"', "Open Sans"].join(",")],
                  fontWeight: 400,
                  fontSize: 16,
                  textTransform: "none",
                }}
                color="secondary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
