import {
  CollisionDetection as CollisionDetectionType,
  Modifiers,
} from "@dnd-kit/core";

export interface PropsDND {
  collisionDetection?: CollisionDetectionType;
  containers?: string[];
  modifiers?: Modifiers;
  value?: string;
  droppableItem?: { id: string; name: string; image: string; position: string };
  droppableKey?: number;
  dargEndCustomFun: (answer: boolean) => void;
}

export interface DraggableProps {
  handle?: boolean;
  droppableItem?: { id: string; name: string; image: string };
}
