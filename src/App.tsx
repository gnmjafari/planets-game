import React from "react";
import DndPlanet from "./components/DndPlanet";
import { PLANETS } from "./data/data";

const App: React.FC = () => {
  return (
    <div
      className="relative bg-sun bg-cover flex-wrap bg-center w-screen h-svh flex flex-col justify-start items-start"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex-wrap bg-center h-svh flex flex-col justify-start items-start p-5">
        {Object.entries(PLANETS).map(([key, value]) => {
          return <DndPlanet key={key} droppableItem={value} />;
        })}
      </div>
    </div>
  );
};

export default App;
