import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
// components
import HomeTitle from './components/HomeTitle/HomeTitle';
import Subtitle from './components/Subtitle/Subtitle';
import RandomName from './components/RandomName/RandomName';

export default function App() {
  return (
    // these are the nav contents
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
            <h2>This is a website to help choose an Armenian name</h2>
          </Route>
          <Route path="/users">
            <Users />
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

// function Home() {
//   return <h2>Home</h2>; 
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
