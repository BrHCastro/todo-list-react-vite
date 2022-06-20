import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

import { toastOptions } from '../helpers/toatify';

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
      toast.error('A tarefa não pode ser vazia!', toastOptions);
      return;
    }

    const task = {
      id: uuid(),
      description: newTask,
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTasks([task, ...tasks]);
    localStorage.setItem('tasks', JSON.stringify([task, ...tasks]));
    toast.success('Tarefa adicionada com sucesso!', toastOptions);
  }

  function toggleTask(id: string) {
    const task = tasks.find(task => task.id === id);

    if (task) {
      task.done = !task.done;
      task.updatedAt = new Date().toISOString();

      setTasks([...tasks]);

      localStorage.setItem('tasks', JSON.stringify([...tasks]));

      toast.info(
        `Tarefa "${task.description.substring(0, 15)}..." foi ${
          task.done ? 'concluída' : 're-adicionada'
        }!`,
        toastOptions,
      );
    }
  }

  function removeTask(id: string) {
    const task = tasks.find(task => task.id === id);

    if (task) {
      const updatedTasks = tasks.filter(task => task.id !== id);

      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      toast.warning(
        `Tarefa "${task.description.substring(
          0,
          15,
        )}..." deletada com sucesso!`,
        toastOptions,
      );
    }
  }

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);

  const taskMemo = useMemo(() => {
    return {
      tasks,
      createTask,
      removeTask,
      toggleTask,
    };
  }, [tasks]);

  return (
    <TaskContext.Provider value={taskMemo}>{children}</TaskContext.Provider>
  );
}

export const useTask = () => useContext(TaskContext);
