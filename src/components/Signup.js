import React from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import GTranslateIcon from '@material-ui/icons/GTranslate';
import "../App.css";

const Login = () => {
    return (
        <div>
            <Grid className="grid-default">
                <Grid id="login-container" container justify="center">
                    <TextField label="Username" margin="normal" />
                    <TextField label="Password" margin="normal" />
                    <TextField label="Password" margin="normal" />
                    <Button href="#text-buttons" color="primary">
                        Create Account
                    </Button>
                    <Grid className="grid-row">
                        <Typography variant="caption" display="block" gutterBottom>
                            Already have an account?
                        </Typography>
                        <Button href="#text-buttons" color="primary">
                            Login
                        </Button>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<GTranslateIcon />}
                    >
                        Login with Google
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
