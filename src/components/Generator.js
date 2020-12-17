import React, { useState } from 'react';
// name data
import NameData from "./NameData.js";
// shuffle button via material-ui icons
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
// material-ui 
import { Typography, Grid } from "@material-ui/core";
import '../App.css';


// converting name data into objects
const RandomName = NameData.name;

function Generator() {
    const [startingName, newName] = useState('name');

    return (
        <>
             <Typography variant="h1" component="h2" gutterBottom>
                {startingName}
            </Typography>
            <Grid id="generator-buttons-container">
                <IconButton
                    aria-label="favorite name"
                    // onClick={() =>
                    // }
                >
                    <SvgIcon id="generator-favorite-icon">
                        <path xmlns="http://www.w3.org/2000/svg" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                    </SvgIcon>
                </IconButton>
                <IconButton
                    aria-label="generate new name"
                    onClick={() =>
                        newName(RandomName[Math.floor(Math.random() * RandomName.length)])
                    }
                >
                    <SvgIcon id="generator-shuffle-icon">
                        <path xmlns="http://www.w3.org/2000/svg" d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>            
                    </SvgIcon>
                </IconButton>
            </Grid>
            
        </>
    );
};

export default Generator;