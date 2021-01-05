import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
// import GTranslateIcon from '@material-ui/icons/GTranslate';
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
    <div Grid container class="grid-default" spacing={1}>
      {/* handleSignUp function passed into form  */}
      {/* <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form> */}
      <Grid class="grid-default" item xs={12}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
      </Grid>
      <Grid className="grid-default">
        <form onSubmit={handleSignUp}>
          <Grid id="login-container" container justify="center">
            <TextField label="Username" margin="normal" name="email" type="email"/>
            <TextField label="Password" margin="normal" name="password" type="password"/>
            {/* <TextField label="Repeat Password" margin="normal" name="password" type="password"/> */}
            <Button type="submit" color="primary">
                Create Account
            </Button>
            <Grid className="grid-row">
                <Typography variant="caption" display="block" gutterBottom>
                    Already have an account?
                </Typography>
                <Button href="#text-buttons" color="primary" type="submit">
                    Login
                </Button>
            </Grid>
            {/* <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<GTranslateIcon />}
            >
                Login with Google
            </Button> */}
          </Grid>
          </form>

      </Grid>
    </div>
  );
};

export default withRouter(SignUp);
