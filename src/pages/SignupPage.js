import React, { useState } from "react";
import { Switch, Grid, Paper, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// main styling
import '../App.css';
// subcomponents
import HomeButton from '../components/HomeButton';
import Signup from '../components/Signup';

function SignupPage() {
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
            height: "100vh",
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
          >
          </Grid>
          <Grid id="switch-container">
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            ></Switch>
          </Grid>
          <Grid id="home-button-container">
            <HomeButton />
          </Grid>
          <Grid className="grid-default">
            <Typography variant="subtitle1" gutterBottom>
              Sign up to save your favorite baby names so you don't forget them before your baby is born
            </Typography>
            <Signup />
          </Grid>
        </Paper>
      </ThemeProvider>
    </section>
  );
}

export default SignupPage;
