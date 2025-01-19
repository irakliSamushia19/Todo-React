import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Todos"
      />
    </div>
  );
}

export default SearchBar;