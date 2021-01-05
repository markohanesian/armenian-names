import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
// Using AuthContext for Firebase user authentication
import { AuthContext } from "../Auth";
import { TextField, Button, Typography, Grid } from "@material-ui/core/";

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
    <Grid container class="grid-default" spacing={1}>
      <Grid class="grid-default" item xs={12}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
      </Grid>
      <form onSubmit={handleLogin}>
          <Grid class="grid-default" item xs={12}>
            <TextField name="email" type="email" placeholder="Email" />
          </Grid>
          <Grid class="grid-default" item xs={12}>
            <TextField name="password" type="password" placeholder="Password" />
          </Grid>
        <Grid class="grid-default" item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default withRouter(Login);
