import React, { lazy, Suspense } from "react";
import { PLANETS } from "./data/data";
const DndPlanet = lazy(() => import("./components/DndPlanet"));

const App: React.FC = () => {
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
        <div className=" flex-wrap gap-2 bg-center h-svh flex flex-col justify-end items-start p-10">
          {Object.entries(PLANETS).map(([key, value]) => {
            return <DndPlanet key={key} droppableItem={value} />;
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default App;
