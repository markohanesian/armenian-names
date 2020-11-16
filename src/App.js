import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
// components
import HomeTitle from './components/HomeTitle/HomeTitle';
import Subtitle from './components/Subtitle/Subtitle';
import RandomName from './components/RandomName/RandomName';
import GenArmFemaleName from './components/GenArmFemaleName/GenArmFemaleName';
import GenArmMaleName from './components/GenArmMaleName/GenArmMaleName';


export default function App() {
  return (
    // these are the nav contents
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Randomizer</Link>
            </li>
            <li>
              <Link to="/bygender">By Gender</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bygender">
            <>
              <HomeTitle />
              <Subtitle />
              <div id="gendered-names-container">
                <GenArmMaleName />
                <GenArmFemaleName />
              </div>
            </>
          </Route>
          <Route path="/about">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem"}} >
              <br></br>
              <p>This is a website to help choose an Armenian name</p>
              <p>Created by Mark Ohanesian, 2020</p>
              <a href="github.com/markohanesian">GitHub</a>
            </div>
            
          </Route>
          <Route path="/login">
          </Route>
          <Route path="/">
            <>
              <HomeTitle />
              <Subtitle />
              <RandomName />
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}