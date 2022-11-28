import { ChangeEvent, useContext, useState } from "react";
import { TodoType } from "../@types/todotype";
import { TaskContainer } from "../styles/Todo.styles";
import { TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

type TodoProps = {
  todo: TodoType;
  deleteTask: (id: number) => void;
  updateTask: (id: number, value: boolean) => void;
};

export function Todo({ todo, deleteTask, updateTask }: TodoProps) {
  const [checked, setChecked] = useState(todo.isComplete);

  function handleChange(item: ChangeEvent) {
    setChecked(!checked);
    todo.isComplete = !checked;
  }

  function handleDelete() {
    deleteTask(todo.id);
  }

  function handleUpdate(event: any) {
    const taskId = parseInt(event.target.id.replace(/\D/g, ""));
    updateTask(taskId, !checked);
  }

  return (
    <TaskContainer>
      <input
        type="checkbox"
        id={`task${todo.id}`}
        onClick={handleUpdate}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={`task${todo.id}`} id={`${todo.id}`}>
        {todo.isComplete ? <XMarkIcon width={32} /> : <CheckIcon width={32} />}
      </label>
      <span>{todo.task}</span>
      <button onClick={handleDelete}>
        <TrashIcon width={32} />
      </button>
    </TaskContainer>
  );
}
