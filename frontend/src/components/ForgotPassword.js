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
import { Link as LinkReact } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert, AlertTitle } from "@material-ui/lab";
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
  paper: {
    width: "494px",
    height: "433px",
  },
  welcomeBack: {
    fontWeight: 500,
    fontSize: "30px",
  },
  textField: {
    width: "432px",
    height: "56px",
    borderRadius: "5px",
  },
  loginButton: {
    width: "432px",
    height: "66px",
    backgroundColor: "#FF5924",
    color: "white",
    borderRadius: "10px",
    fontWeight: 400,
    fontSize: "22.41px",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "#FF5924",
    },
  },
  accountText: {
    fontWeight: 400,
    fontSize: "18px",
    color: "#797979",
  },
  orangeButtons: {
    color: "#FF5924",
    fontWeight: 500,
    fontSize: "18px",
    textTransform: "none",
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
  }

  return (
    <Fragment>
      <FreestandNavBar />

      <Grid container justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Grid item xs={12} align="center">
            <Typography className={classes.welcomeBack}>
              Password Reset
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            direction="column"
            style={{ marginTop: "5%" }}
          >
            {message && <Alert severity="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} align="center">
                <TextField
                  required
                  label="Email address"
                  variant="outlined"
                  className={classes.textField}
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" style={{ marginTop: "5%" }}>
                <Button type="submit" className={classes.loginButton}>
                  Reset Password
                </Button>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} align="center">
            <Button
              component={LinkReact}
              to="/login"
              className={classes.orangeButtons}
            >
              Login
            </Button>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            alignItems="center"
            style={{ marginTop: "5%" }}
          >
            <Grid item xs={7} align="right">
              <Typography className={classes.accountText}>
                Don't have an account?
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Button
                className={classes.orangeButtons}
                component={LinkReact}
                to="/signup"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
}
