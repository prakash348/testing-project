import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TableComponent from "./table-component";
import QuestionAnswerComponent from "../right-side-container/question-answer-ui";

const useStyles = makeStyles({
  rightContainer: {
    border: "solid 2px lightgray",
    borderRadius: "10px",
    padding: 20,
    height: "100%",
    maxHeight: "100vh",
    overflowY: "auto",
  },
});

const RightSideContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightContainer}>
      <Typography>Pull Requests - Review Pending </Typography>
      <TableComponent />
      <QuestionAnswerComponent />
    </div>
  );
};

export default RightSideContainer;
