import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const TypingSpeedChart = () => {
  const [data, setData] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/submissions/${currentUser.uid}`)
      .then((response) => {
        // Map the response data to the format expected by Recharts
        const chartData = response.data.map((result) => ({
          date: new Date(result.date).toLocaleDateString(),
          typingSpeed: result.typingSpeed,
        }));

        setData(chartData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [currentUser.uid]);

  return (
    <div className="container-results">
      <h1 className="modern-results">Your Typing Speed Over Time</h1>
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="typingSpeed" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};
