import {
  Circle,
  GlobeHemisphereWest,
  CheckCircle,
  Trash,
} from "phosphor-react";

import { ITask } from "../../../App";

import { useTasks } from "../../../hooks/useTasks";

import { Container } from "./styles";

interface ITaskManagerProps {
  task: ITask & {
    publishedDateRelativeToNow: string;
    publishedDateFormatted: string;
  };
}

export function Task({
  task: {
    id,
    description,
    done,
    createdAt,
    updatedAt,
    publishedDateFormatted,
    publishedDateRelativeToNow,
  },
}: ITaskManagerProps) {
  const { toggleTask, removeTask } = useTasks();

  return (
    <Container isDone={done}>
      <div className="taskContent">
        {done ? (
          <button title="Desfazer" className="checkbox" onClick={() => toggleTask(id)}>
            <CheckCircle size={16} weight="fill" />
          </button>
        ) : (
          <button title="Concluir tarefa" className="checkbox" onClick={() => toggleTask(id)}>
            <Circle size={16} />
          </button>
        )}
        <span>{description}</span>
        <button
          title="Deletar tarefa"
          className="trash"
          onClick={() => removeTask(id)}
        >
          <Trash size={16} />
        </button>
      </div>
      <div className="taskDate">
        {updatedAt !== createdAt && <small>Editado</small>}
        <time dateTime={updatedAt} title={publishedDateFormatted}>
          {publishedDateRelativeToNow}
        </time>
        <GlobeHemisphereWest size={16} />
      </div>
    </Container>
  );
}
