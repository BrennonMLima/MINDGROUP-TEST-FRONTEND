import React from 'react';
import Td from '../atoms/td';
import Tr from '../atoms/tr';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";


interface Product {
  name: string;
  description: string;
  price: number;
  amount: number;
  id: number;
  image?: string;
}

interface TableRowProps {
  product: Product;
  onToggleEditModal: (product: Product) => void;
}

const TableRow: React.FC<TableRowProps> = ({ product: Product, onToggleEditModal }) => {
  return (
    <Tr key={Product.id}>
      {Product.image && (
        <Td width="10%">
          <img src={Product.image} alt={Product.name} />
        </Td>
      )}
      <Td width="20%">{Product.name}</Td>
      <Td width="40%">{Product.description}</Td>
      <Td width="10%" alignCenter={true}>{Product.price}</Td>
      <Td width="10%" alignCenter={true}>{Product.amount}</Td>
      <Td width="7%" alignCenter={true}>
      <FaEdit onClick={() => onToggleEditModal(Product)} />
        <FaRegTrashAlt />
      </Td>
      <Td width="5%" alignCenter={true}
      ><IoMdAdd className='config-icon' />
        <IoMdRemove className='config-icon' />
      </Td>

    </Tr>
  );
};

export default TableRow;

