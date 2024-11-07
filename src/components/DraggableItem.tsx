import { useDraggable } from "@dnd-kit/core";
import { Draggable } from "../../components";
import { DraggableProps } from "../types/types";

export function DraggableItem({ handle, droppableItem }: DraggableProps) {
  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: droppableItem?.id || "draggable-item",
  });

  return (
    <Draggable
      dragging={isDragging}
      ref={setNodeRef}
      handle={handle}
      listeners={listeners}
      style={{
        opacity: isDragging ? 0 : undefined,
      }}
      droppableItem={droppableItem}
    />
  );
}
