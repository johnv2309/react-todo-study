import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/globals";
import { Container } from "./App.styles";
import { TodoType } from "./@types/todotype";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./components/Todo";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? dark : light
  );
  const [todos, setTodos] = useState<TodoType[]>([]);
  const locale = [
    {
      language: "pt-BR",
      title: "Qual a tarefa?",
      placeholder: "Adicione uma nova tarefa",
    },
    {
      language: "en-US",
      title: "What is the task?",
      placeholder: "Add a new task",
    },
  ];

  let placeholderId = locale.findIndex(
    (placeholder) => placeholder.language === window.navigator.language
  );

  const lang = locale[placeholderId]?.placeholder || locale[0].placeholder;
  const title = locale[placeholderId]?.title || locale[0].title;

  useEffect(() => {
    const local = localStorage.getItem("tasks");
    if (local !== null) setTodos(JSON.parse(local));
  }, []);

  useEffect(() => {
    const local = localStorage.getItem("theme");
    if (local !== null) setTheme(JSON.parse(local));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  useEffect(
    () => localStorage.setItem("theme", JSON.stringify(theme)),
    [theme]
  );

  function handleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  function handleAddTask(task: string) {
    let newTodos = [...todos];
    newTodos.push({
      id: Math.floor(Math.random() * 10000),
      task: task,
      isComplete: false,
    });
    setTodos(newTodos);
  }

  function handleDeleteTask(id: number) {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function handleUpdateTask(id: number, value: boolean) {
    let taskId = todos.findIndex((todo) => todo.id === id);
    todos[taskId].isComplete = value;
    setTodos(todos);
    localStorage.setItem("tasks", JSON.stringify(todos));
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={handleTheme} headerTitle={title} />
        <TodoForm addTask={handleAddTask} lang={lang} />
        {todos.map((task) => (
          <Todo
            key={task.id}
            todo={task}
            deleteTask={handleDeleteTask}
            updateTask={handleUpdateTask}
          />
        ))}
      </Container>
    </ThemeProvider>
  );
}
