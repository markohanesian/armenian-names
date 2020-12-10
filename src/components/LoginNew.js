import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
// Using AuthContext for Firebase user authentication
import { AuthContext } from "../Auth";

// history object passed in as props
const Login = ({ history }) => {
  const handleLogin = useCallback(
    // this event will prevent the page from reloading
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        // upon successful authentication, reroute user to root path
        history.push("/generator");
      } catch (error) {
        // if authentication doesn't work, the error will alert
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  // Users redirected to generator page
  if (currentUser) {
    return <Redirect to="/generator" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p>ara</p>
    </div>
  );
};

export default withRouter(Login);
