import React, { createContext, ReactNode, useState } from "react";

type QustionType = { id: number; question: string; answer: string };

type GlobalContextType = {
  activeQuestionId: number | null;
  setActiveQuestionId: (id: number | null) => void;
  questionsHistory: QustionType[];
  setQuestionsHistory: (each: QustionType[]) => void;
};

type ContextProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextType>({
  activeQuestionId: null,
  setActiveQuestionId: () => {},
  questionsHistory: [],
  setQuestionsHistory: () => {},
});

// export const GlobalContext = createContext(null);

const Context: React.FC<ContextProps> = ({ children }) => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const [questionsHistory, setQuestionsHistory] = useState<QustionType[]>([]);

  const contextValues = {
    activeQuestionId,
    questionsHistory,
  };
  const contextUpdateMethods = { setActiveQuestionId, setQuestionsHistory };

  return (
    <GlobalContext.Provider
      value={{ ...contextValues, ...contextUpdateMethods }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
