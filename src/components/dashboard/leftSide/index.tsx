import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  unList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    height: "90%",
    width: "260px",
    overflowY: "auto",
  },
  listItem: {
    padding: 10,
  },
});

interface studentTypes {
  id: number;
  name: string;
  age: number;
  major: string;
  description: string;
}

const LeftSide: React.FC<{
  studentData: studentTypes[];
  setActiveStudent: any;
}> = ({ studentData, setActiveStudent }) => {
  const classes = useStyles();
  //   console.log(studentData);

  const onClickStudent = (st: any) => {
    setActiveStudent(st);
  };
  return (
    <>
      <Typography variant="h6" sx={{ paddingBottom: "10px" }}>
        Student Names
      </Typography>
      <ul className={classes.unList}>
        {studentData.map((each: studentTypes) => (
          <li key={each.id} className={classes.listItem}>
            <Button onClick={() => onClickStudent(each)}>
              {each.id}. {each.name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LeftSide;
