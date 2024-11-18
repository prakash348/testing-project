import LeftSide from "@/components/dashboard/leftSide";
import RightSide from "@/components/dashboard/rightSide";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  container: {
    padding: 20,
    height: `calc(100vh - 5rem)`,
  },
  inner: {
    height: "100%",
    padding: 20,
    display: "flex",
  },
  left_container: {
    width: 300,
    border: "solid 2px red",
    borderRadius: "10px",
    marginRight: 25,
    padding: 20,
  },
  right_container: {
    flexGrow: 1,
    border: "solid 2px red",
    borderRadius: "10px",
  },
});
interface studentTypes {
  id: number;
  name: string;
  age: number;
  major: string;
  description: string;
}
const Dashboard = () => {
  const classes = useStyles();
  const [studentData, setStudentData] = useState<studentTypes[]>([]);
  const [activeStudent, setActiveStudent] = useState<studentTypes | null>(null);

  const getStudentData = async () => {
    try {
      const response = await fetch("/api/student");
      const result: studentTypes[] = await response.json();
      // console.log(result);
      setStudentData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  console.log(activeStudent);
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.left_container}>
          <LeftSide
            studentData={studentData}
            setActiveStudent={setActiveStudent}
          />
        </div>
        <div className={classes.right_container}>
          <RightSide activeStudent={activeStudent} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
function calc(
  arg0: number,
  arg1: number,
  px: any
):
  | import("csstype").Property.Height<string | number>
  | import("@mui/styles").PropsFunc<
      {},
      import("csstype").Property.Height<string | number> | undefined
    >
  | undefined {
  throw new Error("Function not implemented.");
}
