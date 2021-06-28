import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import ProfilePage from "./ProfilePage";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MenuBookIcon from "@material-ui/icons/MenuBook";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "688px",
    backgroundColor: "#36393F",
    color: "white",
    textAlign: "left",
  },
  cardContent: {
    marginTop: "-14%",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "115px",
    width: "115px",
    backgroundColor: "white",
    borderRadius: "50%",
  },
  media: {
    height: "262px",
    width: "688px",
  },
  profilePic: {
    height: "104px",
    width: "104px",
    borderRadius: "50%",
  },
  profileName: {
    color: "white",
    fontWeight: 700,
    fontSize: "32.48px",
  },
  profileDesc: {
    color: "#EFEFEF",
    fontWeigth: 500,
    fontSize: "15.27px",
    lineHeight: "19.8px",
  },
  divider: {
    backgroundColor: "#8A8A8A",
    border: "1px solid #8A8A8A",
    width: "688px",
    marginTop: "5%",
  },
  informationFont: {
    fontWeight: 400,
    fontSize: "18px",
    color: "white",
  },
}));

export default function ListingsProfileCard() {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <Link href="/profile">
            <Typography
              className={classes.profileName}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Sweath With Hannah
            </Typography>

            <Typography className={classes.profileDesc}>
              Virtual fitness / dance classes for all ages and levels
            </Typography>
            <CardMedia
              className={classes.media}
              image="../static/images/ProfileHeaderBig.png"
            />
            <CardContent className={classes.cardContent}>
              <Paper className={classes.paper}>
                <CardMedia
                  className={classes.profilePic}
                  image="../static/images/ProfilePicBig.png"
                />
              </Paper>
              <Grid container direction="row">
                <Grid item xs={4} container direction="row">
                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="flex-start"
                    spacing={0}
                    className={classes.informationFont}
                    justify="center"
                  >
                    <LocationOnIcon />
                    <Typography >
                      Based in
                    </Typography>
                    <Typography style={{ color: "white", marginLeft: "2%" }}>
                      Los Angeles
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={4} container direction="row">
                  <Grid
                    item
                    xs={12}
                    className={classes.informationFont}
                    container
                    direction="row"
                    justify="flex-start"
                    spacing={0}
                    justify="center"
                  >
                    <LanguageIcon />
                    <Typography>Speaks</Typography>
                    <Typography style={{ color: "white", marginLeft: "2%" }}>
                      English
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={4} container direction="row">
                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="flex-start"
                    spacing={0}
                    className={classes.informationFont}
                    justify="center"
                  >
                    <BookmarksIcon />
                    <Typography>
                      Category
                    </Typography>
                    <Typography style={{ color: "white", marginLeft: "2%" }}>
                      Fitness
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography className={classes.profileDesc}>
                I’m a group fitness instructor and personal trainer in Los
                Angeles. Sweat with Hannah came to fruition as a need for
                exercise, a sense of community, and positivity during the
                pandemic. Taking 45 minutes...
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
      
       <div>
        <Divider className={classes.divider} />
      </div>
    </Fragment>
  );
}
