import React from "react";
import "../../styles/taskPageStyle.scss";

export default function DraggableFeatures({
  itemDetails,
  onArrowSelect,
  handleDeleteTask,
  handleAddTaskPop,
}) {
  return (
    <div className="mt-3">
      <button
        className="me-1"
        onClick={() => handleAddTaskPop(itemDetails.taskName)}
      >
        Edit
      </button>
      <button
        className="me-1"
        onClick={() => handleDeleteTask(itemDetails.taskName)}
      >
        Delete
      </button>
      <button
        className="me-1"
        disabled={itemDetails.taskStage === "0"}
        onClick={() => onArrowSelect("back", itemDetails.taskName)}
      >
        {"<-"}
      </button>
      <button
        className="me-1"
        disabled={itemDetails.taskStage === "3"}
        onClick={() => onArrowSelect("next", itemDetails.taskName)}
      >
        {"->"}
      </button>
    </div>
  );
}
