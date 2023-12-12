// Search.js
import React from 'react';

const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Hacker News"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
