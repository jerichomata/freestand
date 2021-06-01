import React from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchBar from "material-ui-search-bar";
import Typography from "@material-ui/core/Typography";
import { Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography style={{ fontWeight: 700, fontSize: 40, }}>Freestand</Typography>
        <SearchBar
        //value={this.state.value}
        //onChange={(newValue) => this.setState({ value: newValue })}
        //onRequestSearch={() => doSomethingWith(this.state.value)}
        />
        <Button color="secondary">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
