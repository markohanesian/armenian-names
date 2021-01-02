import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
// material-ui
import { Typography, Grid } from "@material-ui/core";
import "../App.css";

const Randomizer = () => {
  const nameList = [
    {
      id: 0,
      name: "Astghik",
      sex: "female",
      meaning:
        '"little star". Derived from the Armenian word "astgh" meaning "star" and the suffix "ig" meaning "little." Famous real-life people named Astghik Astghik in song, story & screen. Astghik is the Armenian goddess of fertility and love.',
    },
    {
      id: 1,
      name: "Lusine",
      sex: "female",
      meaning:
        "A feminine given name that derives from the Armenian word for “moon”. The ancient Armenians, like the Latins, possessed two different names for the moon.",
    },
    {
      id: 2,
      name: "Hayk",
      sex: "male",
      meaning:
        'Hayk the Great (Armenian: Հայկ, Armenian pronunciation: [hajk]), or The Great Hayk, also known as Hayk Nahapet (Հայկ Նահապետ, Armenian pronunciation: [hajk nahapɛt], Hayk the "head of family" or patriarch), is the legendary patriarch and founder of the Armenian nation.',
    },
    {
      id: 3,
      name: "Razmik",
      sex: "male",
      meaning: "Little soldier/fighter",
    },
    {
      id: 4,
      name: "Lori",
      sex: "female",
      meaning: "The name Lori (Լոռի) is first appeared in the 11th century when King David I Anhoghin founded the fortified city of Lori.",
    },
    {
      id: 5,
      name: "Alik",
      sex: "female",
      meaning: "The Armenian word for 'wave', used for both male and female",
    },
    {
      id: 6,
      name: "Siroon",
      sex: "female",
      meaning: "The Armenian word for 'beautiful'",
    },
  ];
  const startingName = [{ id: 0, name: "Astghik", meaning: '"little star". Derived from the Armenian word "astgh" meaning "star" and the suffix "ig" meaning "little." Famous real-life people named Astghik Astghik in song, story & screen. Astghik is the Armenian goddess of fertility and love.',
}];

  const [randomIndex, setRandomIndex] = React.useState(-1);

  const data = randomIndex !== -1 ? nameList[randomIndex] : startingName[0];

  return (
    <Grid class="grid-default"  container spacing={1}>
      <Grid class="grid-default" item xs={12}>
        <Typography variant="h2" component="h2" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.meaning}
        </Typography>
      </Grid>
      <Grid class="grid-row">
        <Grid item xs={6}>
          <IconButton
            aria-label="favorite name"
            // onClick={() =>
            // }
          >
            <SvgIcon id="generator-favorite-icon">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              />
            </SvgIcon>
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <IconButton
            aria-label="generate new name"
            onClick={() =>
              setRandomIndex(Math.floor(Math.random() * nameList.length))
            }
          >
            <SvgIcon id="generator-shuffle-icon">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"
              />
            </SvgIcon>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Randomizer;
