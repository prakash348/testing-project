import LeftSideContainer from "@/components/blog/left-side-container";
import RightSideContainer from "@/components/blog/right-side-container";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  container: {
    padding: 20,
    minHeight: "100vh",
    display: "flex",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  left_container_wrapper: {
    width: "25vw",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  right_container_wrapper: {
    marginLeft: 10,
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.left_container_wrapper}>
          <LeftSideContainer />
        </div>
        <div className={classes.right_container_wrapper}>
          <RightSideContainer />
        </div>
      </div>
    </div>
  );
};

export default Blog;
