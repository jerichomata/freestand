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
import { auth } from "../firebase"
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
    width: "471px",
    height: "541px",
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
  namesInput: {
    width: "197px",
    height: "53px",
  },
  figureImage: {
    width: "70px",
    height: "130px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    signup(email, password)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification();
        history.push("/verify-email");
      })
      .catch((e) => {
        setError(getMessageFromErrorCode(e));
      });

    setLoading(false);
  }

  function getMessageFromErrorCode(e) {
    switch (e.code.substr(5)) {
      case "ERROR_EMAIL_ALREADY_IN_USE":
      case "account-exists-with-different-credential":
      case "email-already-in-use":
        return "Email already used. Go to login page.";
        break;
      case "ERROR_WRONG_PASSWORD":
      case "wrong-password":
        return "Wrong email/password combination.";
        break;
      case "weak-password":
        return "Password should be at least 6 characters";
        break;
      case "ERROR_USER_NOT_FOUND":
      case "user-not-found":
        return "No user found with this email.";
        break;
      case "ERROR_USER_DISABLED":
      case "user-disabled":
        return "User disabled.";
        break;
      case "ERROR_TOO_MANY_REQUESTS":
      case "operation-not-allowed":
        return "Too many requests to log into this account.";
        break;
      case "ERROR_OPERATION_NOT_ALLOWED":
      case "operation-not-allowed":
        return "Server error, please try again later.";
        break;
      case "ERROR_INVALID_EMAIL":
      case "invalid-email":
        return "Email address is invalid.";
        break;
      default:
        return "Sign Up failed. Please try again.";
        break;
    }
  }
  return (
    <Fragment>
      <FreestandNavBar />

      <Grid container justify="center" alignItems="center">
        <Grid
          xs={2}
          item
          container
          direction="column"
          spacing={5}
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <img
              src="../static/images/Figure1.png"
              className={classes.figureImage}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="../static/images/Figure2.png"
              className={classes.figureImage}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="../static/images/Figure3.png"
              className={classes.figureImage}
            />
          </Grid>
        </Grid>
        <Paper className={classes.paper}>
          <Grid item xs={12} align="center">
            <Typography className={classes.welcomeBack}>Sign Up</Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            direction="column"
            style={{ marginTop: "5%" }}
          >
            {error && <Alert severity="error">{error}</Alert>}

            <form onSubmit={handleSubmit}>
              <Grid
                item
                container
                direction="row"
                justify="space-around"
                style={{ marginTop: "3%" }}
              >
                <Grid item xs={5} align="center">
                  <TextField
                    required
                    label="First Name"
                    variant="outlined"
                    className={classes.namesInput}
                  />
                </Grid>
                <Grid item xs={5} align="center">
                  <TextField
                    required
                    label="Last Name"
                    variant="outlined"
                    className={classes.namesInput}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  className={classes.textField}
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
                <TextField
                  required
                  label="Username"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} align="center" style={{ marginTop: "3%" }}>
                <TextField
                  required
                  label="Password"
                  variant="outlined"
                  className={classes.textField}
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" style={{ marginTop: "5%" }}>
                <Button
                  disabled={loading}
                  type="submit"
                  className={classes.loginButton}
                >
                  Sign Up
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            alignItems="center"
            style={{ marginTop: "5%" }}
          >
            <Grid item xs={8} align="right">
              <Typography className={classes.accountText}>
                Already have an account?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                className={classes.orangeButtons}
                component={LinkReact}
                to="/login"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          xs={2}
          item
          container
          direction="column"
          spacing={5}
          alignItems="center"
        >
          <Grid item xs={4}>
            <img
              src="../static/images/Figure4.png"
              className={classes.figureImage}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="../static/images/Figure5.png"
              className={classes.figureImage}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="../static/images/Figure6.png"
              className={classes.figureImage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
