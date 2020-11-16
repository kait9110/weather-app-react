import React from "react";
import Image from "./image.js";
import { Grid } from "@material-ui/core";

export default function Temperature() {
  return (
    <Grid divided="vertically">
      <Grid>
        <span className="temperature" id="temperature">
          95
        </span>
        <span className="degree">°F</span>
      </Grid>
    </Grid>
  );
}
