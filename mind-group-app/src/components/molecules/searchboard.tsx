import React from 'react';
import Button from '../atoms/button/button';
import TextArea from '../atoms/input/textarea';

interface SearchBoardProps {
  onToggleModal: () => void; // Função para abrir/fechar o modal
}

const SearchBoard: React.FC<SearchBoardProps> = ({ onToggleModal }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Handle the text change here
    console.log(event.target.value);
  };

  return (
    <div className="board">
      <TextArea onChange={handleChange} />
      <Button onClick={onToggleModal}>+ Novo</Button> {/* Chama a função para abrir/fechar o modal ao clicar no botão */}
    </div>
  );
};

export default SearchBoard;
