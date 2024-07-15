import React from "react";
// navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
// page components
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
// import LoginPage from './pages/LoginPage';
// import SignUpNew from './components/SignUpNew';
import GeneratorPage from './pages/GeneratorPage';
// Firebase Authentication 
import { AuthProvider } from './Auth';
import Grid from '@material-ui/core/Grid';
// Bottom Navbar 
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
// Bottom Navbar Icons
// import HomeIcon from '@material-ui/icons';
// import VpnKeyIcon from '@material-ui/icons';
// // import DnsIcon from '@material-ui/icons';
// import FavoriteIcon from '@material-ui/icons';
// import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  bottomNav: {
    display: 'relative',
    bottom: '0',
    position: 'fixed',
  },
  navbutton: {
    // display: 'flex',
    // flexDirection: 'row'
    padding: '0rem',
    // margin: '0rem'
  }
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const NavBar = (
    <Grid container>
      <Grid item xs={12}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction className={classes.navbutton} href="/" label="Home"  />
          <BottomNavigationAction className={classes.navbutton} href="/generator" label="Names" />
          <BottomNavigationAction className={classes.navbutton} href="/favorites" label="Favs"  />
          </BottomNavigation> 
      </Grid>
    </Grid>
  );

  return (
    // these are the nav contents
    // Router wrapped in authentication provider
    <AuthProvider>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/favorites">
              <p>Favorites name list page</p>
              {NavBar}
            </Route>
            <Route path="/generator">
              <GeneratorPage />
              {NavBar}
            </Route>
            <Route path="/">
              <HomePage />
              {NavBar}
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
