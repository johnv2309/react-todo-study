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
  const [theme, setTheme] = useState(light);
  const [todos, setTodos] = useState<TodoType[]>([]);

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
        <Header toggleTheme={handleTheme} />
        <TodoForm addTask={handleAddTask} />
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
