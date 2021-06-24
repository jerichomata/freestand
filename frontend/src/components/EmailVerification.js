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
import { auth } from "../firebase";
const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    position: "relative",
  },

  paper: {
    width: "723px",
    height: "435px",
  },
  header: {
    fontWeight: 500,
    fontSize: "35px",
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
}));

export default function EmailVerification() {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  function handleSubmit(event) {
    setMessage("");
    setError("");
    auth.currentUser
      .sendEmailVerification({
        url: "http://localhost:8080/categories-and-tags",
      })
      .then(() => {
        setMessage("Verification Link Sent");
      })
      .catch((e) => {
        setError("Failed to send");
      });
  }

  return (
    <Fragment>
      <FreestandNavBar />

      <Grid container justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
            <img src="./static/images/MailIcon.png" />
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
            <Typography className={classes.header}>
              Verify Your Email To Proceed
            </Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
            <Typography>We just sent you an email!</Typography>
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
            <Typography>
              Please check your email and click on the link provided to verify
              your address.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            align="center"
            style={{ marginTop: "3%", marginBottom: "3%" }}
          >
            <Button
              onClick={handleSubmit}
              xs={4}
              align="center"
              className={classes.loginButton}
            >
              Resend Verification Link
            </Button>
          </Grid>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
        </Paper>
      </Grid>
    </Fragment>
  );
}
