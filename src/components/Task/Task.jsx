import React, { useState, useEffect } from "react";
import { useTasksDispatch } from "../../TasksContext";
import { FiEdit, FiX } from "react-icons/fi";
import { AiOutlineBgColors } from "react-icons/ai";
import Palette from "../Palette/Palette";
import { useColorDispatch, useColor } from "../../ColorsContext";

const Task = ({ task }) => {
  useEffect(() => {}, [task]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [isOpenPallette, setIsOpenPalette] = useState(false);

  const dispatch = useTasksDispatch();
  const dispatchColor = useColorDispatch();
  const value = useColor();
  const { currentBg } = value;
  let taskContent;

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "changed",
      task: { ...task, text: editedText, color: currentBg },
    });
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    taskContent = (
      <div
        className="task-content"
        style={{ backgroundColor: `${task.color}` }}
      >
        <input
          className="edit-input"
          value={editedText}
          onChange={handleChange}
        />
        <span
          className="edit-pallete"
          onClick={() => setIsOpenPalette(!isOpenPallette)}
        >
          <AiOutlineBgColors size="40px" color="white" />
        </span>

        <button
          className="update-btn"
          style={{ color: `${task.color}` }}
          onClick={handleUpdate}
        >
          Update
        </button>
        {isOpenPallette && (
          <Palette
            dispatchColor={dispatchColor}
            task={task}
            dispatch={dispatch}
            edt="edt"
          />
        )}
      </div>
    );
  } else {
    taskContent = (
      <div
        className="task-content"
        style={{ backgroundColor: `${task.color}` }}
      >
        <p>{task.text}</p>
        <span className="icontask">
          <span className="edit" onClick={() => setIsEditing(true)}>
            {" "}
            <FiEdit size="30px" />
          </span>
          <span
            className="delete"
            onClick={() =>
              dispatch({
                type: "deleted",
                id: task.id,
              })
            }
          >
            <FiX size="30px" />
          </span>
        </span>
      </div>
    );
  }

  return <div className="task">{taskContent}</div>;
};

export default Task;
