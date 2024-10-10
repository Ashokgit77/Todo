import useTodoStore from "../store/useTodoStore";
import TaskInput from "../components/TaskInput";
import TaskFilter from "../components/TaskFilter";
import TaskItem from "../components/TaskItem";

const TodoList = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const filter = useTodoStore((state) => state.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskInput />
      <TaskFilter />
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
