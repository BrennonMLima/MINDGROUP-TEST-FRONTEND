import React,{ useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/molecules/header';
import SearchBoard from '../components/molecules/searchboard';
import TableGrid from '../components/organisms/TableGrid';
import ModalAdd from '../components/organisms/modalAdd';
import ModalEdit from '../components/organisms/modalEdit';
import Login from '../login/sign-in/sign-in';
import SignUp from '../login/sign-up/sign-up';

interface Product {
    name: string;
    description: string;
    price: string;
    amount: number;
    id: string;
    image?: string;
}

interface RouterProps {
    isLoggedIn: boolean;
    isModalOpen: boolean;
    isEditModalOpen: boolean;
    handleLogin: (username: string, password: string) => void;
    handleSave: (name: string,
        descripton: string,
        value: string,
        amount: number,
        image: string,) => void;
    handleToggleModal: () => void;
    handleCloseModal: () => void;
    handleToggleEditModal: (product?: Product) => void;
    handleCloseEditModal: () => void;
    handleToggleAddModal: (isOpen: boolean) => void;
}


const AppRouter: React.FC<RouterProps> = ({
    isLoggedIn,
    isModalOpen,
    isEditModalOpen,
    handleLogin,
    handleSave,
    handleToggleModal,
    handleCloseModal,
    handleToggleEditModal,
    handleCloseEditModal,
    
}) => {
    const [editedProduct, setEditedProduct] = useState<Product | null>(null);
    
    const toggleEditModal = (product?: Product) => {
        setEditedProduct(product || null);
        handleCloseModal();
        handleToggleEditModal();
    };
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="main">
                    {isLoggedIn ? (
                        <>
                            <SearchBoard onToggleModal={handleToggleModal} />
                            {isModalOpen && <ModalAdd onSave={handleSave}/>}
                            {isEditModalOpen && <ModalEdit onClose={handleCloseEditModal} editedProduct={editedProduct} />} 
                            <TableGrid onToggleEditModal={toggleEditModal} /> 
                        </>
                    ) : (
                        <Routes>
                            <Route path="/login" element={<Login onLogin={handleLogin} />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="*" element={<Login onLogin={handleLogin} />} />
                        </Routes>
                    )}
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;