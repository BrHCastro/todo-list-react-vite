import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CaretRight } from 'phosphor-react';
import { useState } from 'react';

import clipboardImg from '../../assets/clipboard.svg';
import { useTask } from '../../hooks/useTasks';
import { Container } from './styles';
import { Task } from './Task';

export function TaskManager() {
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);

  const { tasks } = useTask();

  const formattedTasks = tasks.map(task => {
    return {
      ...task,
      publishedDateRelativeToNow: formatDistanceToNow(
        new Date(task.updatedAt),
        {
          locale: ptBR,
          addSuffix: true,
        },
      ),
      publishedDateFormatted: format(
        new Date(new Date(task.updatedAt)),
        "d 'de' LLLL 'às' HH:mm'h'",
        {
          locale: ptBR,
        },
      ),
    };
  });

  const doneTasks = formattedTasks.filter(task => task.done);
  const undoneTasks = formattedTasks.filter(task => !task.done);

  function handleToggleShowCompletedTasks() {
    setShowCompletedTasks(!showCompletedTasks);
  }

  return (
    <Container toggleCompleteTasks={showCompletedTasks}>
      <div className="taskInfo">
        <strong className="createdTasks">
          Tarefas criadas <span>{tasks.length}</span>
        </strong>
        <strong className="completeTasks">
          Concluídas <span>{`${doneTasks.length} de ${tasks.length}`}</span>
        </strong>
      </div>

      {undoneTasks.length === 0 && (
        <div className="emptyTaskContainer">
          <img src={clipboardImg} alt="Icone Clipboard" />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}

      <div className="tasksOpened">
        {undoneTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      {doneTasks.length > 0 && (
        <button
          type="button"
          className="toggleTasksCompleted"
          onClick={handleToggleShowCompletedTasks}
        >
          Tarefas concluídas <CaretRight width={32} />
        </button>
      )}

      <div className="tasksCompleted">
        {doneTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </Container>
  );
}
