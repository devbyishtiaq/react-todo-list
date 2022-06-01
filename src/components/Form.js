import React from "react";

const Form = ({ inputValue, setInputValue, tasks, setTasks }) => {
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { text: inputValue, completed: false, id: Math.random() * 1000 },
    ]);
    setInputValue("");
  };
  return (
    <form className="form d-flex justify-content-center align-items-center">
      <input
        type="text"
        className="todo-input form-control"
        placeholder="Enter Task . . ."
        onChange={inputHandler}
        value={inputValue}
      />
      <button
        className="btn btn-success todo-button ms-1"
        type="submit"
        onClick={onSubmitHandler}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
