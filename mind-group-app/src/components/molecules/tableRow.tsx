import React from 'react';
import Td from '../atoms/td';
import Tr from '../atoms/tr';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

interface Product {
  name: string;
  description: string;
  price: number;
  amount: number;
  id: number;
  image?: string;
}

interface TableRowProps {
  Product: Product;
}

const TableRow: React.FC<TableRowProps> = ({ Product: Product }) => {
  return (
    <Tr key={Product.id}>
      {/* Check if image property exists in Product object */}
      {Product.image && (
        <Td width="10%">
          <img src={Product.image} alt={Product.name} />  {/* Display image */}
        </Td>
      )}
      <Td width="20%">{Product.name}</Td>
      <Td width="40%">{Product.description}</Td>
      <Td width="10%">{Product.price}</Td>
      <Td width="10%">{Product.amount}</Td>
      <Td width="5%"><FaEdit  /></Td>
      <Td width="5%"><FaRegTrashAlt /></Td>
    </Tr>
  );
};

export default TableRow;

