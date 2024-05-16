import React from 'react';
import Button from '../atoms/button';
import Text from '../atoms/text';

const SearchBoard: React.FC = () => {
  return (
    <div className="board">
      <div>
        <Text variant="h1">Pesquisar</Text>
      </div>
      <div className="button">
        <Button>+ Novo</Button>
      </div>
    </div>
  );
};

export default SearchBoard;
