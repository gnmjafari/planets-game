import React, { useState } from "react";
import { PropsDND } from "../types/types";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import { DraggableOverlay, Droppable } from "../../components";
import { DraggableItem } from "./DraggableItem";

const DndPlanet: React.FC<PropsDND> = ({
  collisionDetection,
  modifiers,
  droppableItem,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  return (
    <DndContext
      collisionDetection={collisionDetection}
      modifiers={parent === null ? undefined : modifiers}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={({ over }) => {
        setParent(over ? over.id : null);
        setIsDragging(false);
      }}
      onDragCancel={() => setIsDragging(false)}
    >
      {parent === null ? <DraggableItem droppableItem={droppableItem} /> : null}

      <div className={`absolute  ${droppableItem?.position}`}>
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
  );
};

export default DndPlanet;
