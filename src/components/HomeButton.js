import React from "react";
import { Button, Typography } from "@material-ui/core";
// main styling
import '../App.css';

function HomeButton() {

  return (
    <Button variant="outlined" id="home-button" href="/">
      <Typography id="home-button-text" variant="h1" component="h2" gutterBottom>
        ānūn
      </Typography>
    </Button>
  );
}

export default HomeButton;
