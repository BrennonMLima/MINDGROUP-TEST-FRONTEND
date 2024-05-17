import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/molecules/header';
import SearchBoard from './components/molecules/searchboard';
import TableGrid from './components/organisms/TableGrid';
import ModalAdd from './components/organisms/modalAdd';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header />
      <SearchBoard onToggleModal={handleToggleModal} />
      {isModalOpen && <ModalAdd onClose={handleToggleModal} />}
      <TableGrid />
      <GlobalStyles />
    </div>
  );
};

export default App;
