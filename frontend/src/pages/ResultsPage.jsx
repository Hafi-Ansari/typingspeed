import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/submissions/${currentUser.uid}`;
    console.log('API URL:', import.meta.env.VITE_REACT_APP_API_URL);
    console.log('Constructed URL:', url);
    console.log('currentUser.uid:', currentUser.uid);
    axios
      .get(url)
      .then((response) => {
        console.log('Response data:', response.data);
        setResults(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [currentUser.uid]);

  return (
    <div className="container-results">
      <h1 className="modern-results">Your Previous Test Results</h1>
      {results.map((result, index) => (
        <div key={index} className="modern-results result-card-results">
          <h2>Test {index + 1}</h2>
          <p>Typing Speed: {result.typingSpeed} WPM</p>
          <p>Mistakes: {result.mistakes}</p>
          <p>Date: {new Date(result.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};
