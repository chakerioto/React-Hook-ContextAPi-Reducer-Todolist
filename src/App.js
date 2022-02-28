import FormInput from "./components/FormInput/FormInput";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import { TasksProvider } from "./TasksContext.js";
import { ColorsProvider } from "./ColorsContext";

import "./App.css";

function App() {
  return (
    <TasksProvider>
      <Header />
      <div className="App">
        <div className="content">
          <h1>Todo List</h1>
          <ColorsProvider>
            <FormInput />
            <TaskList />
          </ColorsProvider>
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
