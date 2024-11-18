import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    // alignItems: "center",
    // backgroundColor: "blue",
    height: "94%",
    padding: 20,
  },
  no_active_student: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

interface studentTypes {
  id: number;
  name: string;
  age: number;
  major: string;
  description: string;
}

const RightSide: React.FC<{
  activeStudent: studentTypes | null;
}> = ({ activeStudent }) => {
  const classes = useStyles();

  return (
    <div className={classes.rightContainer}>
      {activeStudent ? (
        <>
          <h2 style={{ paddingBottom: "20px" }}>Active Student</h2>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ paddingBottom: "8px" }}
          >
            ID:
            <span
              style={{
                fontSize: "20px",
                color: "black",
                paddingLeft: "15px",
              }}
            >
              {activeStudent.id}
            </span>
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ paddingBottom: "8px" }}
          >
            Name:
            <span
              style={{
                fontSize: "20px",
                color: "black",
                paddingLeft: "15px",
              }}
            >
              {activeStudent.name}
            </span>
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ paddingBottom: "8px" }}
          >
            Age:
            <span
              style={{
                fontSize: "20px",
                color: "black",
                paddingLeft: "15px",
              }}
            >
              {activeStudent.age}
            </span>
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ paddingBottom: "8px" }}
          >
            Major:
            <span
              style={{
                fontSize: "20px",
                color: "black",
                paddingLeft: "15px",
              }}
            >
              {activeStudent.major}
            </span>
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ paddingBottom: "8px" }}
          >
            Description:
            <span
              style={{
                fontSize: "20px",
                color: "black",
                paddingLeft: "15px",
              }}
            >
              {activeStudent.description}
            </span>
          </Typography>
        </>
      ) : (
        <div className={classes.no_active_student}>
          <h3>No active student selected.</h3>
        </div>
      )}
    </div>
  );
};

export default RightSide;
