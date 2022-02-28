import React, { useState, useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useColor } from "../../ColorsContext";
import { useTasks } from "../../TasksContext";
import { ReactComponent as TickedLogo } from "../../assests/ticked.svg";

const Palette = ({ dispatchColor, dispatch, task, edt }) => {
  const [currentClickingId, setCurrentClickingId] = useState(0);

  const value = useColor();
  const { totalColor } = value;

  useEffect(() => {
    dispatchColor({
      type: "UPDATE_BG",
      currentBg: totalColor[currentClickingId].color,
    });
    console.log(task);
    if (task !== undefined) {
      dispatch({
        type: "updateColor",
        task,
        currentClickingId,
      });
    }
  }, [currentClickingId]);

  return (
    <div className={`pallette ${edt ? "edt" : ""}`}>
      <span></span>
      {totalColor.map((color) => {
        return (
          <div
            key={color.id}
            style={{ backgroundColor: `${color.color}` }}
            onClick={() => setCurrentClickingId(color.id)}
          >
            {currentClickingId === color.id && <TickedLogo />}
          </div>
        );
      })}
    </div>
  );
};

export default Palette;
