import { createContext, ReactNode, useState } from "react";

interface TaskContextType {
  tasks: TasksProps[];
  addTask: (description: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompleted: (id: number) => void;
}

interface TasksProps {
  id: number;
  completed: boolean;
  description: string;
}

export const TaskContext = createContext<TaskContextType>({
  addTask: () => {},
  deleteTask: () => {},
  tasks: [],
  toggleTaskCompleted: () => {},
});

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const addTask = (description: string) => {
    console.log("Task adicionada!")
    setTasks((oldState) => {
      return [
        ...oldState,
        {
          description,
          id: oldState.length + 1,
        },
      ];
    });
  };

  const deleteTask = (id: number) => {
    setTasks((oldState) => {
      return oldState.filter((t) => t.id != id);
    });
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks((oldState) => {
      return oldState.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      });
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
}
