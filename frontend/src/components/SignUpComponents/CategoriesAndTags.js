import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FreestandNavBar from "../FreestandNavBar";
import { Link as LinkReact, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const useStyles = makeStyles((theme) => ({
  root: {},
  sideBarText: {
    fontWeight: 500,
    fontSize: "20px",
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
  Btn: {
    borderRadius: "7.55px",
    fontWeight: 400,
    fontSize: "22.64px",
    textTransform: "none",
    border: "0.754629px solid #FFFFFF",
    // "&:hover": {
    //   color: "black",
    //   backgroundColor: "white",
    // },
  },
  tagsBtn: {
    fontWeight: 400,
    fontSize: "15.94px",
    borderRadius: 10,
    marginRight: "1%",
    marginTop: "1%",
    textTransform: "none",
  },
  selectedFont: {
    fontSize: 25,
    fontWeight: 600,
    color: "#8B8B8B",
  },
  offeringBtn: {
    fontWeight: 400,
    fontSize: "15.94px",
    borderRadius: 10,
    textTransform: "none",
    marginRight: "1%",
    marginTop: "1%",
  },
}));

export default function TitlesAndDesc() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const handleTagClick = (event) => {
    if (event.target.style.backgroundColor == "white") {
      event.target.style.backgroundColor = "#303236";
      event.target.style.color = "white";
    } else {
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
    }
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
        </Grid>
        <Grid item container xs={12} md={9} direction="column">
          <Grid item xs={12}>
            <Typography className={classes.selectedFont}>
              {selected}/10 - Select categories and tags that best describe you
              and your offerings
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "2%" }}>
            <Typography>Offering</Typography>
          </Grid>
          <Grid item xs={10}>
            <Button
              className={classes.offeringBtn}
              variant="outlined"
              color="secondary"
              onClick={handleTagClick}
            >
              Group Classes
            </Button>
            <Button
              className={classes.offeringBtn}
              variant="outlined"
              color="secondary"
            >
              1 on 1 Sessions
            </Button>
            <Button
              className={classes.offeringBtn}
              variant="outlined"
              color="secondary"
            >
              On Demand Content
            </Button>
            <Button
              className={classes.offeringBtn}
              variant="outlined"
              color="secondary"
            >
              Webinars
            </Button>
            <Button
              className={classes.offeringBtn}
              variant="outlined"
              color="secondary"
            >
              Courses
            </Button>
            <Button
              className={classes.offeringBtn}
              variant="outlined"
              color="secondary"
            >
              Private Community
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>Type</Typography>
          </Grid>
          <Grid item md={10}>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem
                nodeId="1"
                label="Fitness Instructors"
                className={classes.Btn}
              >
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                  onClick={handleTagClick}
                >
                  Yoga
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Pilates
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  HIT
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Dance
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Barre
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Mobility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Cardio
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Strength
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Circuit Training
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Flexibility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Muscle Building
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Weight Loss
                </Button>
              </TreeItem>
            </TreeView>
          </Grid>
          <Grid item md={10} style={{ marginTop: "3%" }}>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem
                nodeId="1"
                label="Meditation & Spiritual Teachers"
                className={classes.Btn}
              >
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Meditation
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Mindfulness
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Spirituality
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Qi-gong
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Energy Healing
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Sound Therapy
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Enlightenment
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Reiki
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Chakra
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Stress Management
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Relaxation
                </Button>
              </TreeItem>
            </TreeView>
          </Grid>
          <Grid item md={10} style={{ marginTop: "3%" }}>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="Life Coaches" className={classes.Btn}>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Yoga
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Pilates
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  HIT
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Dance
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Barre
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Mobility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Cardio
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Strength
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Circuit Training
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Flexibility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Muscle Building
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Weight Loss
                </Button>
              </TreeItem>
            </TreeView>
          </Grid>
          <Grid item md={10} style={{ marginTop: "3%" }}>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" label="Nutritionist" className={classes.Btn}>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Yoga
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Pilates
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  HIT
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Dance
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Barre
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Mobility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Cardio
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Strength
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Circuit Training
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Flexibility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Muscle Building
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Weight Loss
                </Button>
              </TreeItem>
            </TreeView>
          </Grid>
          <Grid item md={10} style={{ marginTop: "3%" }}>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem
                nodeId="1"
                label="Chefs and Cooks"
                className={classes.Btn}
              >
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Yoga
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Pilates
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  HIT
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Dance
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Barre
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Mobility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Cardio
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Strength
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Circuit Training
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Flexibility
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Muscle Building
                </Button>
                <Button
                  className={classes.tagsBtn}
                  variant="outlined"
                  color="secondary"
                >
                  Weight Loss
                </Button>
              </TreeItem>
            </TreeView>
          </Grid>
          <Grid item xs={12} sm={10} align="center" style={{ marginTop: "3%" }}>
            <Button
              className={classes.saveButton}
              component={LinkReact}
              to="/titles-and-description"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
