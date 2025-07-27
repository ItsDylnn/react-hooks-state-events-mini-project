import React from "react";

function Task({ text, category }) {
  return (
    <div className="task">
      <div className="text">{text}</div>
      <div className="category">{category}</div>
    </div>
  );
}

export default Task;
