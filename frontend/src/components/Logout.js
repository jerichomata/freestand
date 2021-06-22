import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { FormHelperText, Toolbar } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "./FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    position: "relative",
  },


  welcomeBack: {
    fontWeight: 500,
    fontSize: "30px",
  },
  paper: {
    width: "494px",
    height: "250px",
  },


  orangeButtons: {
    backgroundColor: "#FF5924",
    color: "white",
    fontWeight: 500,
    fontSize: "18px",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "#FF5924",
    },
    borderRadius: "10px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  function handleLogout() {
    setError("");
    logout()
      .then(() => {
        history.push("/login");
      })
      .catch((e) => {
          setError(e)
      });
  }

  return (
    <Fragment>
      <FreestandNavBar />

      <Grid container justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Grid item xs={12} align="center">
            <Typography className={classes.welcomeBack} style={{marginTop: "5%"}}>
              Log out of {currentUser.email}?
            </Typography>
          </Grid>
          {error && <Alert severity="error">{error}</Alert>}
          <Grid item xs={12} align="center">
            <Button className={classes.orangeButtons} onClick={handleLogout} style={{marginTop: "5%"}}>
              Log Out
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
}
