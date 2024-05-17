import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/atoms/input/input';
import Button from '../../components/atoms/button/button';
import Text from '../../components/atoms/text/text';
const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para criar uma nova conta
    };

    return (
        <div className="login">
            <Text variant="h1">Cadastre-se</Text>
            <Text variant="p">Olá, bem-vindo(a)!</Text>
            <form onSubmit={handleSubmit}>
                <div className='form-login'>
                    <Input type="text" placeholder="E-mail" onChange={handleUsernameChange} className='text-input' />
                    <Input type="text" placeholder="Nome" onChange={handleUsernameChange} className='text-input' />
                    <Input type="password" placeholder="Senha" onChange={handlePasswordChange} />
                    <Button type="submit" className='margin-top'>Cadastrar </Button>
                    <p>Já tem uma conta? <Link to="/login" className='link'>Entre!</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
