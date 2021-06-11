import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CategoryCard from "./CategoryCard";
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
          <Button className={classes.seeAllButton}>See all</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Fitness"
            image="../static/images/Fitness.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Dance"
            image="../static/images/Dance.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Yoga"
            image="../static/images/Yoga.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Meditation"
            image="../static/images/Meditation.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Cooking"
            image="../static/images/Cooking.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Nutritionist"
            image="../static/images/Nutritionist.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Therapy"
            image="../static/images/Therapy.png"
          ></CategoryCard>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CategoryCard
            title="Pilates"
            image="../static/images/Pilates.png"
          ></CategoryCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}
