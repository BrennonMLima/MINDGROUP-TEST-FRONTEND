import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login/sign-in/sign-in';
import SignUp from '../login/sign-up/sign-up';
import MainPage from '../components/templates/mainpage';

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
    handleSave: (name: string, descripton: string, value: string, amount: number, image: string) => void;
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
    handleToggleAddModal,
}) => {
    return (
        <Router>
            {isLoggedIn ? (
                <MainPage
                    isLoggedIn={isLoggedIn}
                    isModalOpen={isModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    handleLogin={handleLogin}
                    handleSave={handleSave}
                    handleToggleModal={handleToggleModal}
                    handleCloseModal={handleCloseModal}
                    handleToggleEditModal={handleToggleEditModal}
                    handleCloseEditModal={handleCloseEditModal}
                    handleToggleAddModal={handleToggleAddModal}
                />
            ) : (
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<Login onLogin={handleLogin} />} />
                </Routes>
            )}
        </Router>
    );
};

export default AppRouter;
