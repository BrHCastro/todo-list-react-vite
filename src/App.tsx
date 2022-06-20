import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from './components/Footer';
import { FormTask } from './components/FormTask';
import { Header } from './components/Header';
import { TaskManager } from './components/TaskManager';
import { TaskProvider } from './hooks/useTasks';
import { GlobalStyle } from './styles/global';

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
