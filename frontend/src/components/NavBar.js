import React from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchBar from "material-ui-search-bar";
import Typography from "@material-ui/core/Typography";
import { FormHelperText, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          justify="space-around"
          alignItems="center"
          container
          
        >
          <Grid item>
            <Typography style={{ fontWeight: 700, fontSize: 40 }}>
              Freestand
            </Typography>
          </Grid>

          <Grid item>
            <SearchBar
            //value={this.state.value}
            //onChange={(newValue) => this.setState({ value: newValue })}
            //onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          </Grid>
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
      </Toolbar>
    </AppBar>
  );
}
