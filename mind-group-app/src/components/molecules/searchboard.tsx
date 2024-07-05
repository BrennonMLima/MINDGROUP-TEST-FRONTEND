import React from 'react';
import Button from '../atoms/button/button';
import TextArea from '../atoms/input/textarea';

interface SearchBoardProps {
  onToggleModal: () => void;
  search: string;
  setSearch: (search: string) => void;
}

const SearchBoard: React.FC<SearchBoardProps> = ({ onToggleModal, search, setSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="board">
      <TextArea value={search} onChange={handleSearchChange} />
      <Button onClick={onToggleModal}>+ Novo</Button>
    </div>
  );
};

export default SearchBoard;
