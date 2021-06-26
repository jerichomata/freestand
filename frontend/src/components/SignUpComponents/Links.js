import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "../FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {},
  sideBarText: {
    fontWeight: 500,
    fontSize: "20px",
  },
  headingText: {
    fontWeight: 500,
    fontSize: "18px",
  },
  exampleText: {
    fontWeight: 300,
    fontSize: "18px",
    color: "#7E7E7E",
    lineHeight: "21px",
  },
  backButton: {
    maxWidth: "148px",
    maxHeight: "48px",
    minWidth: "148px",
    minHeight: "48px",
    borderRadius: "50px",
    backgroundColor: "#C4C4C4",
    color: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
  saveButton: {
    maxWidth: "215px",
    maxHeight: "83px",
    minWidth: "215px",
    minHeight: "83px",
    backgroundColor: "#FF5924",
    color: "white",
    borderRadius: "10px",
    fontWeight: 400,
    fontSize: "19.41px",
    textTransform: "none",
    "&:hover": {
      color: "black",
      backgroundColor: "#FF5924",
    },
  },
  textField: {
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
  },
  aboutTextField: {
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
  },
  addButton: {
    backgroundColor: "#7E7E7E",
    borderRadius: "10px",
    width: "65px",
    height: "65px",
    "&:hover": {
      backgroundColor: "#7E7E7E",
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const [urlInputList, setUrlInputList] = useState([]);
  const [displayInputList, setDisplayInputList] = useState([]);
  const [urlList, setUrlList] = useState(["empty"]);
  const [displayList, setDisplayList] = useState([""]);
  function onAddBtnClick(event) {
    setUrlInputList(
      urlInputList.concat(<UrlInput key={urlInputList.length} />)
    );
    setDisplayInputList(
      displayInputList.concat(<DisplayInput key={displayInputList.length} />)
    );
    setUrlList(urlList.concat("test"));
    setDisplayList(displayList.concat("test"));
    console.log(urlList);
  }

  const UrlInput = () => {
    return (
      <Grid item>
        <TextField
          fullWidth={true}
          variant="outlined"
          className={classes.textField}
          onInput={(e) => setUrlList(urlList.concat(e.target.value))}
        />
      </Grid>
    );
  };
  const DisplayInput = () => {
    return (
      <Grid item>
        <TextField
          fullWidth={true}
          variant="outlined"
          className={classes.textField}
          onInput={(e) => setDisplayList(displayList.concat(e.target.value))}
        />
      </Grid>
    );
  };
  return (
    <Fragment>
      <FreestandNavBar />

      <Grid container justify="space-evenly">
        <Grid item container direction="column" xs={12} md={2} spacing={3}>
          <Grid item>
            <Typography className={classes.sideBarText}>
              Categories and Tags
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.sideBarText}>
              Titles and Description
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.sideBarText}>
              Basic Information
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.sideBarText}>Links</Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" xs={12} md={9} spacing={3}>
          <Grid item container direction="column" xs={12} md={5} spacing={1}>
            <Grid item>
              <Typography className={classes.headingText}>URL</Typography>
              <Typography className={classes.exampleText}>
                Example: instagram.com/freestandworld/
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth={true}
                variant="outlined"
                className={classes.textField}
                onInput={(e) => setUrlList(urlList.concat(e.target.value))}
              />
            </Grid>
            {urlInputList}
          </Grid>
          <Grid item container direction="column" xs={12} md={5} spacing={1}>
            <Grid item xs={12} md={6}>
              <Typography className={classes.headingText}>
                Display Text
              </Typography>
              <Typography className={classes.exampleText}>Instagram</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth={true}
                variant="outlined"
                className={classes.textField}
                onInput={(e) =>
                  setDisplayList(displayList.concat(e.target.value))
                }
              />
            </Grid>
            {displayInputList}
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={12}
            md={1}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Button className={classes.addButton} onClick={onAddBtnClick}>
                <AddIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="space-evenly"
            spacing={2}
          >
            <Grid item xs={12} sm={4} align="center">
              <Button
                component={LinkReact}
                to="/basic-info"
                className={classes.backButton}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={8} align="center">
              <Button className={classes.saveButton}>Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
