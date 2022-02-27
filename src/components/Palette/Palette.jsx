import React, { useState, useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useColor } from "../../ColorsContext";
import { useTasks } from "../../TasksContext";

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
            {currentClickingId === color.id && (
              <TiTickOutline color="white" size={24} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Palette;
