import React from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchBar from "material-ui-search-bar";

export default function NavBar() {
  return (
    <AppBar>
      <SearchBar
        //value={this.state.value}
        //onChange={(newValue) => this.setState({ value: newValue })}
        //onRequestSearch={() => doSomethingWith(this.state.value)}
      />
    </AppBar>
  );
}
