import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    setTasks([...tasks, inputValue]);
  }
  return (
    <>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="Add Task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </div>
    </>
  );
}

export default App;
