import { useState } from "react";
import Todo from "./components/Todo";

import "./App.css";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Cria funcionalida X no sistema",
      category: "trabalho",
      IsCompleted: false,
    },
    {
      id: 2,
      text: "ir para academia",
      category: "pessoal",
      IsCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "estudos",
      IsCompleted: false,
    },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const addTodo = (text, category) => {
    const nwetodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        IsCompleted: false,
      },
    ];
    setTodos(nwetodos);
  };

  const removetodos = (id) => {
    const nwetodos = [...todos];
    const filteredTodos = nwetodos.filter((todos) =>
      todos.id !== id ? todos : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const nwetodos = [...todos];
    nwetodos.map((todo) =>
      todo.id === id ? (todo.IsCompleted = !todo.IsCompleted) : todo
    );
    setTodos(nwetodos);
  };

  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "C ompleted"
                ? todo.IsCompleted
                : !todo.IsCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removetodos={removetodos}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <TodoForm addTodo={addTodo} r />
      </div>
    </>
  );
}

export default App;
