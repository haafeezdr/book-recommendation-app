'use client';

import React, { useState, useEffect } from 'react';
import WelcomePage from '../../components/WelcomePage';
import LoginPage from '../../components/LoginPage';
import DashboardPage from '../../components/DashboardPage';


const IndexPage: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (username: string) => { // Update the type of parameter
    setUsername(username);
    setIsLoggedIn(true);
    setShowWelcome(false);
  };
  

  return (
    <div className=''> 
      {showWelcome && <WelcomePage />}
      {!showWelcome && !isLoggedIn && <LoginPage onLogin={handleLogin} />} {/* Pass the function directly */}
      {isLoggedIn && <DashboardPage username={username} />}
    </div>
  );
};

export default IndexPage;