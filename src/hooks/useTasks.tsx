import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toatify";


interface ITask {
  id: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ITaskProviderProps {
  children: ReactNode;
}

interface ITaskContextData {
  tasks: ITask[];
  createTask: (newTask: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const TaskContext = createContext<ITaskContextData>({} as ITaskContextData);

export function TaskProvider({ children }: ITaskProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function createTask(newTask: string) {
    if (newTask.trim().length === 0) {
      return toast.error("A tarefa não pode ser vazia!", toastOptions);
    }

    const task = {
      id: uuid(),
      description: newTask,
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTasks([task, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([task, ...tasks]))
    toast.success("Tarefa adicionada com sucesso!", toastOptions);
  }

  function toggleTask(id: string) {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      task.done = !task.done;
      task.updatedAt = new Date().toISOString();
      setTasks([...tasks]);
      localStorage.setItem("tasks", JSON.stringify([...tasks]));
      toast.info(`Tarefa "${task.description.substring(0, 15)}..." foi ${task.done ? "concluída" : "re-adicionada"}!`, toastOptions);
    }
  }

  function removeTask(id: string) {
    const task = tasks.find((task) => task.id === id);

    if (task) {
      setTasks(tasks.filter((task) => task.id !== id));
      localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== id)));
      toast.warning(`Tarefa "${task.description.substring(0, 15)}..." deletada com sucesso!`, toastOptions);
    }
  }

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);

  return (
    <TaskContext.Provider value={{tasks, createTask, removeTask, toggleTask} }>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  return context;
}
