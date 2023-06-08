import React from "react";
import { useNavigate } from 'react-router-dom';
import {DashboardButton} from "../components/Dashboard/DashBoardActivity"
import { useAuth } from '../contexts/AuthContext'; 
import "../styles.css";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleStartActivity= () => {
    navigate('/typingtest');
  }

  const handleShowResults= () => {
    navigate('/results');
  }

  const handleShowAnalysis= () => {
    navigate('/analysis');
  }

  const atIndex = currentUser.email.indexOf("@");
  const username = currentUser.email.slice(0, atIndex);

  return (
    <div className="container">
      <div className="modern">
        <h5>Welcome, {username}!</h5> 
        <DashboardButton handleStartActivity={handleStartActivity}/>
        <div className="result-display">
          <div className="center-text">
            <button className="button" onClick={handleShowResults}>Typing Test History</button>
            <button className="button" onClick={handleShowAnalysis}>Analysis</button>
          </div>
        </div>
      </div>
    </div>
  );
};
