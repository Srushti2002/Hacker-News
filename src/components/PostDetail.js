// PostDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://hn.algolia.com/api/v1';

const PostDetail = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/items/${match.params.id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [match.params.id]);

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>Points: {post.points}</p>
          <ul>
            {post.children.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
