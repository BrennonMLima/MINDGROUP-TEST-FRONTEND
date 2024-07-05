import React, { useState } from 'react';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import SearchBoard from '../molecules/searchboard';
import ModalAdd from '../organisms/modalAdd';
import ModalEdit from '../organisms/modalEdit';
import TableGrid from '../organisms/TableGrid';

interface Product {
  name: string;
  description: string;
  price: string;
  amount: number;
  id: string;
  image?: string;
}

interface MainPageProps {
  isLoggedIn: boolean;
  isModalOpen: boolean;
  isEditModalOpen: boolean;
  handleLogin: (username: string, password: string) => void;
  handleSave: (name: string, descripton: string, value: string, amount: number, image: string) => void;
  handleToggleModal: () => void;
  handleCloseModal: () => void;
  handleToggleEditModal: (product?: Product) => void;
  handleCloseEditModal: () => void;
  handleToggleAddModal: (isOpen: boolean) => void;
}

const MainPage: React.FC<MainPageProps> = ({
  isModalOpen,
  isEditModalOpen,
  handleToggleModal,
  handleCloseModal,
  handleToggleEditModal,
  handleCloseEditModal,
}) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [search, setSearch] = useState('');

  const toggleEditModal = (product?: Product) => {
    setEditedProduct(product || null);
    handleCloseModal();
    handleToggleEditModal();
  };

  const updateProducts = () => {
    setShouldUpdate(!shouldUpdate);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SearchBoard onToggleModal={handleToggleModal} search={search} setSearch={setSearch} />
        {isModalOpen && <ModalAdd onSave={updateProducts} />}
        {isEditModalOpen && (
          <ModalEdit 
            onClose={handleCloseEditModal} 
            editedProduct={editedProduct} 
            onSave={updateProducts} 
          />
        )}
        <TableGrid shouldUpdate={shouldUpdate} onToggleEditModal={toggleEditModal} search={search} />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
