import React, { lazy, Suspense, useState } from "react";
import { PLANETS } from "./data/data";
import GameTutorialModal from "./components/GameTutorialModal";
import WrongAnswerModal from "./components/WrongAnswerModal";
import CorrectAnswerModal from "./components/CorrectAnswerModal";
const DndPlanet = lazy(() => import("./components/DndPlanet"));

const App: React.FC = () => {
  const [openGameTutorial, setOpenGameTutorial] = useState<boolean>(true);
  const [openWrongAnswer, setOpenWrongAnswer] = useState<boolean>(false);
  const [openCorrectAnswer, setOpenCorrectAnswer] = useState<boolean>(false);

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
    >
      <div
        className="relative bg-sun bg-cover  bg-center w-screen h-svh flex flex-col justify-start items-start"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          className="btn btn-warning btn-outline  absolute top-5 right-10"
          onClick={() => {
            setOpenGameTutorial(true);
          }}
        >
          آموزش بازی
        </button>
        <div className=" flex-wrap gap-2 bg-center h-svh flex flex-col justify-end items-start p-10">
          {Object.entries(PLANETS).map(([key, value]) => {
            return (
              <DndPlanet
                key={key}
                droppableItem={value}
                dargEndCustomFun={(answer) => {
                  if (answer) {
                    setOpenCorrectAnswer(true);
                  } else {
                    setOpenWrongAnswer(true);
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      <GameTutorialModal
        isOpen={openGameTutorial}
        onClose={() => {
          setOpenGameTutorial(false);
        }}
      />

      <WrongAnswerModal
        isOpen={openWrongAnswer}
        onClose={() => {
          setOpenWrongAnswer(false);
        }}
      />

      <CorrectAnswerModal
        isOpen={openCorrectAnswer}
        onClose={() => {
          setOpenCorrectAnswer(false);
        }}
      />
    </Suspense>
  );
};

export default App;
