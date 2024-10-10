import useTodoStore from "../store/useTodoStore";

const TaskFilter = () => {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  return (
    <div className="mb-4 flex justify-start text-white">
      <button
        onClick={() => setFilter("all")}
        className={`mr-2 bg-blue-800 py-2 px-2 rounded  ${
          filter === "all" ? "underline" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`mr-2  bg-green-800 py-1.5 px-1.5 rounded ${
          filter === "completed" ? "underline" : ""
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        className={`bg-red-800 py-1.5 px-1.5 rounded ${
          filter === "incomplete" ? "underline" : ""
        }`}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
