import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
// additional styling
import "../App.css";
// Firebase app config 
import app from '../base';

const Login = () => {
    return (
        <div>
            <Grid className="grid-default">
                <Grid id="login-container" container justify="center">
                    <TextField label="Username" margin="normal" />
                    <TextField label="Password" margin="normal" />
                    <Button href="#text-buttons" color="primary">
                        Login
                    </Button>
                    <Button onClick={() => app.auth().signOut()} href="#text-buttons" color="primary">
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
