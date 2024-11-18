import { Button, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Chat from "./chat";

const useStyles = makeStyles({
  left_container: {
    border: "solid 2px lightgray",
    borderRadius: "10px",
    padding: "10px 10px 0px 10px",
    flexGrow: 1,
    height: "100vh",
    minHeight: "100vh",
    overflowY: "auto",
  },
});

const LeftSideContainer = () => {
  const classes = useStyles();
  //   console.log(studentData);
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={classes.left_container}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Chat" value="1" />
              <Tab label="Library" value="2" />
              <Tab label="Settings" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: "15px 0px" }}>
            <Chat />
          </TabPanel>
          <TabPanel value="2">Library Section</TabPanel>
          <TabPanel value="3">Settings</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default LeftSideContainer;
