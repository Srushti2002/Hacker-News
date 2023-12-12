// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://hn.algolia.com/api/v1';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/search?query=${query}`);
        setResults(response.data.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query) {
      fetchData();
    } else {
      // Clear results when query is empty
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <h1>Hacker News Search</h1>
      <input
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((result) => (
          <li key={result.objectID}>
            <a href={`http://news.ycombinator.com/item?id=${result.objectID}`} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
