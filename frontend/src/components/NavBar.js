import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchBar from "material-ui-search-bar";
import Typography from "@material-ui/core/Typography";
import { FormHelperText, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Login from "./Login";
import { Link as LinkReact } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import firebase from "firebase/app";
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
  loginButton: {
    fontFamily: [['"Montserrat"', "Open Sans"].join(",")],
    fontWeight: 400,
    fontSize: 16,
    textTransform: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [logLink, setLogLink] = useState("")
  const [logName, setLogName] = useState("")

  const myFunction = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogLink("/logout")
        setLogName("Log Out")
      } else {
        setLogLink("/login")
        setLogName("Log In")
      }
    });
  }


  useEffect(() => {
    myFunction();
    return () => {
      setLogName({});
      setLogLink({});
    };
}, []);

  const [error, setError] = useState("");
  function handleLogClick() {}

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
            <Grid item xs={12} md={3}>
              <SearchBar></SearchBar>
            </Grid>
            <Grid item xs={12} md={1} align="center">
              <Button
                className={classes.loginButton}
                color="secondary"
                component={LinkReact}
                to={logLink}
                onClick={handleLogClick}
              >
                {logName}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
