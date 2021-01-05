import React, { useState } from "react";
import { Switch, Grid, Paper, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// main styling
import "../App.css";
// subcomponents
import HomeButton from "../components/HomeButton";

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <section>
      <ThemeProvider theme={theme}>
        <Paper
          style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            // padding: "1rem",
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          ></Grid>
          <Grid id="switch-container">
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></Switch>
          </Grid>
          <Grid id="home-button-container">
            <HomeButton />
          </Grid>
          <Grid className="homepage-body">
            <Typography variant="body1" gutterBottom>
              Traditional Armenian names used today originate from deities,
              saints, Kings and Queens of former empires, animals, and other
              sources
            </Typography>
          </Grid>
          <Grid className="homepage-body">
            <Typography variant="body1" gutterBottom>
              Armenians today, depending on the spoken dialect and area of
              nationality, gender names most commonly for a boy or girl
              inversely. The name "Alik" pronounced "ah-leek", may be used for
              girls in the Armenian Diaspora, but used for a boy in Armenia
            </Typography>
          </Grid>
          
          <Grid className="homepage-body">
            <Typography variant="body1" gutterBottom>
              This is a website to help choose an Armenian name
            </Typography>
            <Typography variant="body1" gutterBottom>
              Created by Mark Ohanesian, 2020
            </Typography>
          </Grid>
          <a href="github.com/markohanesian">GitHub</a>
        </Paper>
      </ThemeProvider>
    </section>
  );
}

export default HomePage;
