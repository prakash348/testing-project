// import { Send } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React, { ReactNode, useContext, useState } from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { GlobalContext } from "@/context/context";

const useStyles = makeStyles({
  chatContainer: {
    // backgroundColor: "green",
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px 0px",
  },
  horizontalContainer: {
    color: "gray",
    margin: `10px 0px 30px 0px`,
    width: "100%",
    fontSize: 12,
    position: "relative",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hrtag: {
    flexGrow: 1,
  },
  horizontalContainerPara: {
    position: "absolute",
    background: "white",
    padding: `0px 10px`,
    zIndex: 1,
  },
  questionsContainerWapper: {
    marginTop: 40,
  },
  sendQuestionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    border: "1px solid lightgray",
    borderRadius: "6px",
    padding: "10px",
    marginBottom: "20px",
  },
  textAreaContainer: {
    width: "100%",
    marginTop: 30,
  },
  textArea: {
    border: "2px solid lightgray",
    borderRadius: "6px",
    resize: "none",
    width: "100%",
    fontSize: 16,
    padding: "10px",
    boxSizing: "border-box",
  },
});

type Question = {
  id: number;
  question: string;
  startIcon?: ReactNode;
};

const Chat = () => {
  const classes = useStyles();
  const { setActiveQuestionId } = useContext(GlobalContext);
  const [inputQuestion, setInputQuestion] = useState("");
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "Pull requests that need review?",
      startIcon: <GitHubIcon sx={{ color: "orange", fontSize: "20px" }} />,
    },
    {
      id: 2,
      question: "Security vulnerabilites in the current codebase?",
      startIcon: <CodeIcon sx={{ color: "orange", fontSize: "20px" }} />,
    },
    {
      id: 3,
      question: "Top errors or bugs in the latest release/build?",
      startIcon: (
        <ReportGmailerrorredIcon sx={{ color: "orange", fontSize: "20px" }} />
      ),
    },
  ];

  console.log("inputQuestion", inputQuestion, activeQuestion);
  return (
    <div className={classes.chatContainer}>
      <div className={classes.imageContainer}>
        <Image
          src="https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?t=st=1727083181~exp=1727086781~hmac=7d63918554d06c52e688b3a33cddc942d0f62a27eedd1c24565b62c5a2d73849&w=1060"
          width={180}
          height={180}
          alt="Picture of the author"
        />
        <h4 color="textSecondary">Good Morning, Prakash</h4>
        <p style={{ color: "gray", fontSize: "13px" }}>
          The 8800 AI Bot will provide precise data base on your inputs.
        </p>
      </div>
      <div className={classes.horizontalContainer}>
        <hr className={classes.hrtag} />
        <p className={classes.horizontalContainerPara}>
          Getting Started? Try these:
        </p>
      </div>
      <ul className={classes.questionsContainerWapper}>
        {questions.map((each: Question) => (
          <li key={each.id} className={classes.sendQuestionContainer}>
            {each.startIcon}
            <p>{each.question}</p>
            <Box onClick={() => setActiveQuestion(each)}>
              {/* <SendIcon sx={{ color: "orange", fontSize: "20px" }} /> */}

              <Image
                src="/PaperPlaneRight@3x.svg"
                width={17}
                height={17}
                
                alt=" Logo"
              />
            </Box>
          </li>
        ))}
      </ul>
      <div className={classes.textAreaContainer}>
        <textarea
          rows={5}
          className={classes.textArea}
          placeholder="Enter the question"
          value={inputQuestion}
          onChange={(e: any) => {
            setInputQuestion(e.target.value);
            setActiveQuestionId(+e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Chat;
