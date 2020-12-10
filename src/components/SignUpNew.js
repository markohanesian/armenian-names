import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";

// history object passed in as props
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      // this event will prevent the page from reloading
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        // upon successful authentication, reroute user to root path
        history.push("/");
      } catch (error) {
        // if authentication doesn't work, the error will alert
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      {/* handleSignUp function passed into form  */}
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
