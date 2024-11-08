import React, { useState, useEffect } from "react";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import { DraggableOverlay, Droppable } from "../../components";
import { DraggableItem } from "./DraggableItem";
import { PropsDND } from "../types/types";

const DndPlanet: React.FC<PropsDND> = ({
  collisionDetection,
  modifiers,
  droppableItem,
  dargEndCustomFun,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (droppableItem?.image) {
      const img = new Image();
      img.src = droppableItem.image;
      img.onload = handleImageLoad;
    } else {
      setLoading(false);
    }
  }, [droppableItem?.image]);

  return (
    <>
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <DndContext
          collisionDetection={collisionDetection}
          modifiers={parent === null ? undefined : modifiers}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={({ over }) => {          
            dargEndCustomFun(over ? true : false);
            setParent(over ? over.id : null);
            setIsDragging(false);
          }}
          onDragCancel={() => setIsDragging(false)}
        >
          {parent === null ? (
            <DraggableItem droppableItem={droppableItem} />
          ) : null}

          <div className={`absolute ${droppableItem?.position}`}>
            <Droppable
              key={droppableItem?.id || "drop_item"}
              id={droppableItem?.id || "drop_item"}
              dragging={isDragging}
            >
              {parent === droppableItem?.id ? (
                <DraggableItem droppableItem={droppableItem} />
              ) : null}
            </Droppable>
          </div>

          <DraggableOverlay droppableItem={droppableItem} />
        </DndContext>
      )}
    </>
  );
};

export default DndPlanet;
