import React from 'react';
import styled from 'styled-components';
import Th from '../atoms/th';
import Tr from '../atoms/tr';

const TableHeadStyled = styled.div`
 

  table tr:nth-child(odd) {
    background-color: #f0f0f0;
  }

  table tr:nth-child(even) {
    background-color: #fff;
  }
`;

const TableHeader = () => {
  return (
    <TableHeadStyled className='table-header'>
      <Tr>
        <Th width="8%">Imagem</Th>
        <Th width="20%">Produto</Th>
        <Th width="40%">Descrição</Th>
        <Th width="10%">Preço (R$)</Th>
        <Th width="10%">Quantidade</Th>
        <Th width="7%"> Ações</Th>
        <Th width="5%"> E/S</Th>
      </Tr>
    </TableHeadStyled>
  );
};

export default TableHeader;
