import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { TodoFormType } from "../@types/todoformtype";
import { TodoFormContainer } from "../styles/TodoForm.styles";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

export function TodoForm({ addTask }: TodoFormType) {
  const locale = [
    { language: "pt-BR", placeholder: "Adicione uma nova tarefa" },
    { language: "en-US", placeholder: "Add a new task" },
  ];

  let placeholderId = locale.findIndex(
    (placeholder) => placeholder.language === window.navigator.language
  );

  const lang = locale[placeholderId]?.placeholder || locale[0].placeholder;

  const [inputText, setInputText] = useState("");
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  function handleKeyInput(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && inputText !== "") {
      addTask(inputText);
      setInputText("");
    }
  }

  function handleButtonInput(event: MouseEvent<HTMLButtonElement>) {
    if (inputText !== "") addTask(inputText);
    setInputText("");
  }

  return (
    <TodoFormContainer>
      <input
        type="text"
        name=""
        id="taskInput"
        value={inputText}
        placeholder={lang}
        onChange={handleInputChange}
        onKeyUp={handleKeyInput}
      />
      <button onClick={handleButtonInput} disabled={inputText === ""}>
        <PlusSmallIcon width={32} />
      </button>
    </TodoFormContainer>
  );
}
