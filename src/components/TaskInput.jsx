import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

const TaskInput = () => {
  const [title, setTitile] = useState("");
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitile("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitile(e.target.value)}
        className="border rounded p-2 w-full outline-none"
        placeholder="Enter a new Task"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
