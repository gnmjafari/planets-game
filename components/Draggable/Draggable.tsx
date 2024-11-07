import React, { forwardRef } from "react";
import classNames from "classnames";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";
import styles from "./Draggable.module.css";

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

interface Props {
  axis?: Axis;
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  label?: string;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  // buttonStyle?: React.CSSProperties;
  transform?: Transform | null;
  droppableItem?: { id: string; name: string; image: string };
}

export const Draggable = forwardRef<HTMLButtonElement, Props>(
  function Draggable(
    {
      dragOverlay,
      dragging,
      handle,
      label,
      listeners,
      transform,
      style,
      // buttonStyle,
      ...props
    },
    ref
  ) {
    return (
      <div
        className={classNames(
          styles.Draggable,
          dragOverlay && styles.dragOverlay,
          dragging && styles.dragging,
          handle && styles.handle
        )}
        style={
          {
            ...style,
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
          } as React.CSSProperties
        }
      >
        <button
          {...props}
          aria-label="Draggable"
          data-cypress="draggable-item"
          {...(handle ? {} : listeners)}
          tabIndex={handle ? -1 : undefined}
          ref={ref}
        >
          <div className="indicator w-fit flex rounded-full flex-col justify-center items-center">
            <div className="text-slate-50 text-lg font-extrabold indicator-item indicator-middle indicator-center  badge p-3 badge-lg backdrop-blur-xl badge-outline">
              {props.droppableItem?.name}
            </div>
            <div>
              <img
                src={props.droppableItem?.image}
                alt={props.droppableItem?.name}
              />
            </div>
          </div>
        </button>
        {label ? <label>{label}dfhgh </label> : null}
      </div>
    );
  }
);
