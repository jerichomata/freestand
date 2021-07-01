import React, { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CategoryCard from "./CategoryCard";
import { Link as LinkReact, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  categoriesHeader: {
    fontWeight: 700,
    fontSize: "25px",
  },
  seeAllButton: {
    color: "#B9B9B9",
    fontWeight: 700,
    fontSize: "20px",
    textTransform: "none",
  },
}));

export default function FeaturedCategories() {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  return (
    <Fragment>
      <Grid
        container
        direction="row"
        style={{ marginTop: "5%" }}
        justify="space-evenly"
        spacing={4}
      >
        <Grid item xs={6} sm={10}>
          <Typography className={classes.categoriesHeader}>
            Categories
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2} align="center">
          <Button
            className={classes.seeAllButton}
            component={LinkReact}
            to="/fitness-and-exercise"
          >
            See all
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to="/fitness-and-exercise">
            <CategoryCard
              title="Fitness"
              image="../static/images/Fitness.png"
            ></CategoryCard>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to="/nutritionist">
            <CategoryCard
              title="Nutritionist"
              image="../static/images/Nutritionist.png"
            ></CategoryCard>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to="/cooking">
            <CategoryCard
              title="Cooking"
              image="../static/images/Cooking.png"
            ></CategoryCard>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link to="/meditation">
            <CategoryCard
              title="Meditation"
              image="../static/images/Meditation.png"
            ></CategoryCard>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
}
