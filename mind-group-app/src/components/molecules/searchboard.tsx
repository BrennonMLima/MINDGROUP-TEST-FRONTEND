import React from 'react';
import Button from '../atoms/button/button';
import TextArea from '../atoms/input/textarea';

interface SearchBoardProps {
  onToggleModal: () => void;
}

const SearchBoard: React.FC<SearchBoardProps> = ({ onToggleModal }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  };

  return (
    <div className="board">
      <TextArea onChange={handleChange} />
      <Button onClick={onToggleModal}>+ Novo</Button> 
    </div>
  );
};

export default SearchBoard;
