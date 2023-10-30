import PropTypes from "prop-types";

function Todo({ todo, removetodos, completeTodo }) {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.IsCompleted ? "line-through" : "" }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">{todo.category}</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Confirmar
          </button>
          <button className="remove" onClick={() => removetodos(todo.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    IsCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  removetodos: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;
