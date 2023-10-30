import PropTypes from "prop-types";

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="tesxt"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired, // Adicione a validação para search
  setSearch: PropTypes.func.isRequired,
};

export default Search;
