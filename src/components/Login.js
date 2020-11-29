import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import "../App.css";

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
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
