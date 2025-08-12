import React, { useState } from 'react';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Login from './Login';

function MainLayout() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentPage, setCurrentPage] = useState('welcome'); // 'welcome', 'signup', 'dashboard', 'login'

  return (
    <>
      {currentPage === 'welcome' && (
        <Welcome 
          onGoToSignUp={(role) => {
            setSelectedRole(role);
            setCurrentPage('signup');
          }}
        />
      )}
      {currentPage === 'signup' && (
        <SignUp 
          selectedRole={selectedRole}
          onBackToWelcome={() => setCurrentPage('welcome')}
          onGoToLogin={() => setCurrentPage('login')}
        />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard 
          selectedRole={selectedRole} 
          onBackToWelcome={() => setCurrentPage('welcome')}
        />
      )}
      {currentPage === 'login' && (
        <Login 
          onBackToWelcome={() => setCurrentPage('welcome')}
        />
      )}
    </>
  );
}

export default MainLayout;
