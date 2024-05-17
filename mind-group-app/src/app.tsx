import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import AppRouter from './router/router';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleToggleEditModal = () => {
    setIsEditModalOpen((prevState) => !prevState);
  };
  const handleToggleAddModal = (isOpen: boolean) => {
    setIsEditModalOpen(false);
  setIsModalOpen(isOpen);
  };



  return (
    <div className="App">
      <AppRouter
        isLoggedIn={isLoggedIn}
        isModalOpen={isModalOpen}
        isEditModalOpen={isEditModalOpen} 
        handleLogin={handleLogin}
        handleToggleModal={handleToggleModal}
        handleCloseModal={handleCloseModal}
        handleToggleEditModal={handleToggleEditModal} 
        handleCloseEditModal={handleCloseEditModal} 
        handleToggleAddModal={handleToggleAddModal}
      />
      <GlobalStyles />
    </div>
  );
};

export default App;
