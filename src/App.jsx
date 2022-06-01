import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <header>
              <h1>ToDoList With ReactJs</h1>
            </header>
          </div>
          <div className="col-12">
            <Form
              inputValue={inputValue}
              setInputValue={setInputValue}
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
          <div className="col-12">
            <TodoList tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
