import React from "react";
import { useTasks } from "../../TasksContext";

import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useTasks();

  return (
    <div className="tasks-list">
      {tasks?.map((el) => {
        return <Task key={el.id} task={el} />;
      })}
    </div>
  );
};

export default TaskList;
