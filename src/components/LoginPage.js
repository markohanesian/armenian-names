import React, { useState } from "react";
import { Switch, Grid, Typography, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// main styling
import '../App.css';
// subcomponents
import HomeButton from './HomeButton';

function LoginPage() {
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
            padding: "1rem",
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
          <Grid className="grid-default">
            <HomeButton />
          </Grid>
          <Grid className="grid-default">

          </Grid>
        </Paper>
      </ThemeProvider>
    </section>
  );
}

export default LoginPage;
