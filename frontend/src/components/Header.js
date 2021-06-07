import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
export default function Header() {
  return (
    <Fragment>
      <Typography style={{ fontWeight: 700, fontSize: 40 }}>
        Discover and connect with wellness pros online
      </Typography>
    </Fragment>
  );
}
