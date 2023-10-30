import PropTypes from "prop-types";

function Filter({ Filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={Filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todos</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
}
Filter.propTypes = {
  Filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};
export default Filter;
