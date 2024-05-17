import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/atoms/text/text';
import Button from '../../components/atoms/button/button';
import Input from '../../components/atoms/input/input';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className="login">
            <Text variant="h1">Login</Text>
            <Text variant="p">Olá, bem-vindo(a) de</Text>
            <Text variant="p">volta!</Text>

            <form onSubmit={handleSubmit}>
                <div className='form-login'>
                    <Input type="text" placeholder="E-mail" onChange={handleUsernameChange} className='text-input' />
                    <Input type="password" placeholder="Senha" onChange={handlePasswordChange} />
                    <Button type="submit" className='margin-top'>Entrar</Button>
                    <p>Não tem uma conta? <Link to="/signup" className='link'>Cadastre-se!</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
