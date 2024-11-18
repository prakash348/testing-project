import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect, useState } from "react";
import { userDetails } from "../../../../data/index";
import { Button } from "@mui/material";
import Image from "next/image";
import { GlobalContext } from "@/context/context";

const useStyles = makeStyles({
  parentContainer: {
    // border: "solid 2px lightgray",
    // borderRadius: "10px",
    margin: 0,
    padding: 20,
    marginTop: 20,
    overflowY: "auto",
    // boxSizing: "border-box",
  },
  questionsContainer: {
    fontSize: 20,
    listStyle: "none",
  },
  questionStyles: {
    textAlign: "right",
    padding: "10px 20px",
    backgroundColor: "#f0f1f2",
    borderRadius: 10,
    maxWidth: "50%",
  },
  answerStyles: {
    padding: "10px 20px",
    backgroundColor: "#f0f1f2",
    borderRadius: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

type QustionType = { id: number; question: string; answer: string };

const QuestionAnswerComponent = () => {
  const classes = useStyles();
  const { activeQuestionId } = useContext(GlobalContext);

  const [questionsHistory, setQuestionsHistory] = useState<QustionType[]>([]);

  const onClickGenerateButton = () => {};
  useEffect(() => {
    const res = userDetails.allQuesitons.find((e) => e.id === activeQuestionId);
    console.log(res);
    if (res) {
      var timer = setTimeout(() => {
        console.log("settimeout function is called");
        setQuestionsHistory((prev) => [...prev, { ...res, id: prev.length }]);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [activeQuestionId]);

  console.log(questionsHistory);
  return (
    <div className={classes.parentContainer}>
      <h3>{activeQuestionId}</h3>
      <Button onClick={onClickGenerateButton}>Generate</Button>
      {questionsHistory?.length > 0 ? (
        <ul className={classes.questionsContainer}>
          {questionsHistory.map((each) => (
            <li key={each?.id}>
              <p style={{ textAlign: "right", margin: "30px 0px" }}>
                <span className={classes.questionStyles}>{each?.question}</span>
              </p>
              <p className={classes.answerStyles}>{each?.answer}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={classes.imageContainer}>
          <Image
            src="https://img.freepik.com/free-vector/tiny-man-chatting-online-with-ai-assistant-flat-illustration_74855-16288.jpg?t=st=1727258807~exp=1727262407~hmac=93c00a57923809d0ba8131268e3c834fb25079fa24a94bd7fd9f4a582fc4a4fb&w=1800"
            width={800}
            height={500}
            alt="Picture of the author"
          />
          <h2 color="textSecondary">Chatting Empty</h2>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswerComponent;
