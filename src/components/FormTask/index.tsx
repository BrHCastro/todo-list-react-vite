import { ChangeEvent, FormEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

import { useTasks } from '../../hooks/useTasks';

import { Container } from "./styles";

export function FormTask() {
  const [description, setDescription] = useState("");

  const { createTask } = useTasks();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createTask(description);
    setDescription("");
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={handleChange}
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </Container>
  );
}
