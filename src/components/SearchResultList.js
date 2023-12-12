// SearchResultList.js
import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultList = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.objectID}>
          <Link to={`/post/${result.objectID}`}>{result.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultList;
