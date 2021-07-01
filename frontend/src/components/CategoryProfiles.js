import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ProfileCard from "./ProfileCard";
import ListingsProfileCard from "./ListingsProfileCard";
const useStyles = makeStyles((theme) => ({
  root: {},
  filterGrid: {
    backgroundColor: "#000000",
  },
  filterTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
}));

export default function CategoryProfiles(props) {
  const classes = useStyles();
  const [offering, setOffering] = useState("no-preference");
  const [category, setCategory] = useState("no-preference");
  const handleOffering = (event) => {
    setOffering(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Fragment>
      <Grid
        container
        direction="row"
        style={{ marginTop: "10%" }}
        justify="space-between"
      >
        <Grid item xs={2} container direction="column">
          <Grid
            item
            xs={12}
            container
            direction="column"
            className={classes.filterGrid}
            style={{ marginTop: "5%" }}
          >
            <Grid item xs={12}>
              <Typography className={classes.filterTitle} align="center">
                Offerings
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="offering"
                  name="offering"
                  value={offering}
                  onChange={handleOffering}
                >
                  <FormControlLabel
                    value="no-preference"
                    control={<Radio />}
                    label="No Preference"
                  />
                  <FormControlLabel
                    value="private"
                    control={<Radio />}
                    label="Private"
                  />
                  <FormControlLabel
                    value="group-sessions"
                    control={<Radio />}
                    label="Group Sessions"
                  />
                  <FormControlLabel
                    value="community"
                    control={<Radio />}
                    label="Community"
                  />
                  <FormControlLabel
                    value="live-sessions"
                    control={<Radio />}
                    label="Live Sessions"
                  />
                  <FormControlLabel
                    value="recorded-content"
                    control={<Radio />}
                    label="Recorded Content"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction="column"
            className={classes.filterGrid}
            style={{ marginTop: "5%" }}
          >
            <Grid item xs={12}>
              <Typography className={classes.filterTitle} align="center">
                Categories
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="category"
                  name="category"
                  value={category}
                  onChange={handleCategory}
                >
                  <FormControlLabel
                    value="no-preference"
                    control={<Radio />}
                    label="No Preference"
                  />
                  <FormControlLabel
                    value="yoga"
                    control={<Radio />}
                    label="Yoga"
                  />
                  <FormControlLabel
                    value="pilates"
                    control={<Radio />}
                    label="Pilates"
                  />
                  <FormControlLabel
                    value="hiit"
                    control={<Radio />}
                    label="HIIT"
                  />
                  <FormControlLabel
                    value="dance"
                    control={<Radio />}
                    label="Dance"
                  />
                  <FormControlLabel
                    value="cardio"
                    control={<Radio />}
                    label="Cardio"
                  />
                  <FormControlLabel
                    value="strength"
                    control={<Radio />}
                    label="Strength"
                  />
                  <FormControlLabel
                    value="circuit-training"
                    control={<Radio />}
                    label="Circuit Training"
                  />
                  <FormControlLabel
                    value="barre"
                    control={<Radio />}
                    label="Barre"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9} container direction="row">
          <Grid item>
            <ListingsProfileCard />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
