import { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setCategory("");
    setValue("");
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefas/:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="test"
          placeholder="Digite um título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">trabalho</option>
          <option value="pessoal">pessoal</option>
          <option value="estudo">estudo</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, // Adicione a validação para addTodo
};

export default TodoForm;
