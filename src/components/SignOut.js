import React from "react";
import { Grid, Button } from "@material-ui/core";
// Importing Firebase app config for logout button
import app from '../base';

const SignOut = ()=> {
    return (
        <Grid className="homepage-body">
            <Button
              onClick={() => {
                  app.auth().signOut();
                  alert('You signed out!');
                  window.location='/'
                }
              }
              color="primary"
            >
              Sign Out!
            </Button>
          </Grid>
    )
}

export default SignOut;