import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { TypingTest } from "./pages/TypingTestPage.jsx";
import { Login } from "./pages/LoginPage.jsx";
import { Dashboard } from "./pages/DashboardPage.jsx";
import { Header } from './components/NavigationBar/Header';
import { Signup } from "./pages/SignupPage.jsx";
import { ResultsPage } from "./pages/ResultsPage.jsx";
import { TypingSpeedChart } from "./pages/GraphPage.jsx";
import { Logout } from './pages/LogoutPage.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/typingtest" element={<PageWithHeader element={<TypingTest />} />} />
          <Route path="/dashboard" element={<PageWithHeader element={<Dashboard />} />} />
          <Route path="/results" element={<PageWithHeader element={<ResultsPage />} />} />
          <Route path="/analysis" element={<PageWithHeader element={<TypingSpeedChart />} />} />
          <Route path="/*" element={<Navigate to="/signup" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const PageWithHeader = ({ element }) => (
  <div>
    <Header />
    {element}
  </div>
);

export default App;
