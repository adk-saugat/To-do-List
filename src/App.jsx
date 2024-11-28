import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputVal, setInputval] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputval(e.target.value);
  };

  const handleAddTask = (event) => {
    setTasks([...tasks, { title: inputVal, id: uuidv4(), status: false }]);
  };

  const handleDelete = (taskId) => {
    console.log(taskId);
    const newTask = tasks.filter(({ id }) => {
      return taskId !== id;
    });
    setTasks(newTask);
  };

  const handleChecked = (taskId) => {
    setTasks(() => {
      return tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: !task.status };
        }
        return { ...task };
      });
    });
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {tasks.map(({ title, id, status }) => {
          return (
            <div key={id}>
              <input
                type="checkbox"
                checked={status}
                onChange={() => handleChecked(id)}
              />
              <span>{title}</span>
              <button onClick={() => handleDelete(id)}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
