import useTodoStore from "../store/useTodoStore";

const TaskItem = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-2"
      />

      <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
        {task.title}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white p-2 rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
