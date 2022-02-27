import React, { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { useTasksDispatch } from "../../TasksContext";
import { useColor, useColorDispatch } from "../../ColorsContext";

import Palette from "../Palette/Palette";

const FormInput = () => {
  const [text, setText] = useState("");
  const [isSelectColor, setIsSelectColor] = useState(false);

  const dispatchColor = useColorDispatch();
  const dispatch = useTasksDispatch();

  const value = useColor();
  const { currentBg } = value;

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (text === "") {
      return alert("Add some Tasks guys :)");
    }
    setText("");
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
      color: `${currentBg}`,
    });
  };

  return (
    <form className="user-form" style={{ backgroundColor: currentBg }}>
      <span onClick={() => setIsSelectColor(!isSelectColor)}>
        <AiOutlineBgColors size="32px" color="grey" />
      </span>
      <input
        type="text"
        placeholder="Add a todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="add-button"
        onClick={handleButtonClick}
        style={{ backgroundColor: currentBg }}
      >
        Add
      </button>
      {isSelectColor && (
        <Palette dispatch={dispatch} dispatchColor={dispatchColor} />
      )}
    </form>
  );
};

let nextId = 3;

export default FormInput;
