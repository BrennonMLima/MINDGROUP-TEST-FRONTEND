import React from 'react';
import Td from '../atoms/table/td';
import Tr from '../atoms/table/tr';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { deleteProduct, updateAmount } from '../../service/products';

interface Product {
  name: string;
  description: string;
  price: string;
  amount: number;
  id: string;
  imageUrl?: string;
}

interface TableRowProps {
  product: Product;
  onToggleEditModal: (product: Product) => void;
  onUpdate: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ product, onToggleEditModal, onUpdate }) => {
  const handleDeleteProduct = async () => {
    await deleteProduct(product.id);
    onUpdate();
  }

  const handleAddQuantity = async () => {
    const newAmount: number = Number(product.amount) + 1;
    await updateAmount(product.id, newAmount);
    onUpdate();
  }

  const handleRemoveQuantity = async () => {
    if (product.amount > 0) {
      const newAmount: number = Number(product.amount) - 1;
      await updateAmount(product.id, newAmount);
      onUpdate();
    }
  }

  return (
    <Tr key={product.id}>
      {/*{product.imageUrl && (
        <Td width="10%">
          <img src={product.imageUrl} alt={product.name} />
        </Td>
      )}*/}
      <Td width="20%">{product.name}</Td>
      <Td width="40%">{product.description}</Td>
      <Td width="10%" alignCenter={true}>{product.price}</Td>
      <Td width="10%" alignCenter={true}>{product.amount}</Td>
      <Td width="7%" alignCenter={true}>
        <FaEdit className='action-icon' onClick={() => onToggleEditModal(product)} />
        <FaRegTrashAlt className='action-icon' onClick={handleDeleteProduct} />
      </Td>
      <Td width="5%" alignCenter={true}>
        <IoMdAdd className='config-icon' onClick={handleAddQuantity} />
        <IoMdRemove className='config-icon' onClick={handleRemoveQuantity} />
      </Td>
    </Tr>
  );
};

export default TableRow;
