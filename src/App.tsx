import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TaskProvider } from "./hooks/useTasks";

import { TaskManager } from "./components/TaskManager";
import { Header } from "./components/Header";
import { FormTask } from "./components/FormTask";

import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer";

export interface ITask {
  id: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

export function App() {
  return (
    <TaskProvider>
      <Header />
      <div className="wrapper">
        <FormTask />
        <TaskManager />
        <Footer />
      </div>
      <ToastContainer />
      <GlobalStyle />
    </TaskProvider>
  );
}
