import { Button, colors, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    color: "red",
    borderStyle: "solid",
    border: "blue",
    background: "white",
    // padding: `20px 40px`,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" color="red" align="center" noWrap>
        Home Route Home Route Home Route Home Route Home Route Home Route Home
        Route Home Route Home Route Home Route Home Route Home Route Home Route
        Home Route Home Route Home Route Home Route Home Route Home Route Home
        Route Home Route Home Route Home Route Home Route Home Route Home Route
        Home Route Home Route Home Route Home Route
      </Typography>
      <Typography variant="button">button</Typography>
      <Button className={classes.btn}>Click</Button>
    </div>
  );
};

export default Home;
