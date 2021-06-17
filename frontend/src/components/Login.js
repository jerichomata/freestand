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

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
      event.preventDefault();
      console.log( 'Email:', email, 'Password: ', password); 
     // You should see email and password in console.
     // ..code to submit form to backend here...

  }
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

      <Grid container justify="center" alignItems="center" >
        <Paper className={classes.paper}>
          <Grid item xs={12} align="center">
            <Typography className={classes.welcomeBack}>
              Welcome Back!
            </Typography>
          </Grid>
          <Grid item container xs={12} direction="column" style={{marginTop: "5%"}}>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} align="center">
                <TextField
                  required
                  label="Email address or username"
                  variant="outlined"
                  className={classes.textField}
                  value={email}
                  onInput={ e=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" style={{marginTop: "5%"}}>
                <TextField
                  required
                  label="Password"
                  variant="outlined"
                  className={classes.textField}
                  value={password}
                  onInput={ e=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" style={{marginTop: "5%"}}>
                <Button type="submit" className={classes.loginButton}>
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid item container direction="row" xs={12} alignItems="center" style={{marginTop: "5%"}}>
            <Grid item xs={7} align="right">
              <Typography className={classes.accountText}>
                Don't have an account?
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Button className={classes.orangeButtons}>Sign Up</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} align="center">
            <Button className={classes.orangeButtons}>Forgot Password?</Button>
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
}
