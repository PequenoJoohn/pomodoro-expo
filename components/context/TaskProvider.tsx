import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TaskContextType {
  tasks: TasksProps[];
  addTask: (description: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompleted: (id: number) => void;
  updateTask: (id: number, description: string) => void;
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
  updateTask: () => {},
});

const TASKS_STORAGE_KEY = "fokus-tasks";

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTasks(loadedData);
        setIsLoaded(true);
      } catch (error) {}
    };

    getData();
  }, []);

  useEffect(() => {
    const storeData = async (value: TasksProps[]) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
      } catch (error) {}
    };
    if (isLoaded) {
      storeData(tasks);
    }
  }, [tasks]);

  const addTask = (description: string) => {
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

  const updateTask = (id: number, newDescription: string) => {
    setTasks((oldState) =>
      oldState.map((t) => {
        if (t.id == id) {
          return { ...t, description: newDescription };
        }
        return t;
      })
    );
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
      value={{ tasks, addTask, deleteTask, toggleTaskCompleted, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
