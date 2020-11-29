import React from "react";
// navigation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
// page components
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
// COMPONENTS
// import RandomName from "./components/RandomName/RandomName";
// import GenArmFemaleName from "./components/GenArmFemaleName/GenArmFemaleName";
// import GenArmMaleName from "./components/GenArmMaleName/GenArmMaleName";

export default function App() {
  const NavBar = (
    <nav id="bottom-navigation-group">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/generator">Generator</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
  
  return (
    // these are the nav contents
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
              <div id="gendered-names-container">
                {/* <GenArmMaleName />
                <GenArmFemaleName />
                <RandomName /> */}
              </div>
              {NavBar}
          </Route>
          <Route path="/login">
            <LoginPage />
            {NavBar}
          </Route>
          <Route path="/signup">
            <h1>
              signup page
            </h1>
            {NavBar}
          </Route>
          <Route path="/">
            <HomePage />
            {NavBar}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
