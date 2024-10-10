import { create } from "zustand";

// func load to - localStorage
const loadTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// Z- Integration
const useTodoStore = create((set) => ({
  tasks: loadTasksFromLocalStorage(),
  filter: "all",

  addTask: (title) =>
    set((state) => {
      const updatedTasks = [
        ...state.tasks,
        { title, completed: false, id: Date.now() },
      ];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save tasks to localStorage
      return { tasks: updatedTasks };
    }),

  toggleTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save tasks to localStorage
      return { tasks: updatedTasks };
    }),

  deleteTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save tasks to localStorage
      return { tasks: updatedTasks };
    }),

  setFilter: (filter) => set(() => ({ filter })),
}));

export default useTodoStore;
