import React from "react";

const TodoList = ({ tasks, setTasks }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {tasks.map((task) => {
          return (
            <div className="todo d-flex align-items-center mt-3" key={task.id}>
              <li className={`todo-item ${task.completed ? "completed" : ""}`}>
                {task.text}
              </li>
              <button
                className="btn btn-success complete-btn ms-auto"
                onClick={() => {
                  setTasks(
                    tasks.map((elm) => {
                      if (elm.id === task.id) {
                        return {
                          ...elm,
                          completed: !elm.completed,
                        };
                      }
                      return elm;
                    })
                  );
                }}
              >
                <i className="fas fa-check"></i>
              </button>
              <button
                className="btn btn-danger trash-btn ms-1"
                onClick={() => {
                  setTasks(tasks.filter((e) => e.id !== task.id));
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
