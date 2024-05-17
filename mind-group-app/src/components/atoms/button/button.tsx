import React from 'react';

interface ButtonProps {
  children: string;
  className?: string;
  onClick?: () => void; // Adicionando a propriedade onClick
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>{children}</button> 
  );
};

export default Button;
