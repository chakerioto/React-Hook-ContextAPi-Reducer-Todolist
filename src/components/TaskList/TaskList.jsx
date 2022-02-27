import React, { useState, useContext } from "react";
import { useColor } from "../../ColorsContext";
import { useTasks, useTasksDispatch } from "../../TasksContext";

import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useTasks();

  console.log(tasks, "i rerender");

  return (
    <div className="tasks-list">
      {tasks?.map((el) => {
        return <Task key={el.id} task={el} />;
      })}
    </div>
  );
};

export default TaskList;
