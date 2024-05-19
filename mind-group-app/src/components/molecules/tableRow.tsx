import React from 'react';
import Td from '../atoms/td';
import Tr from '../atoms/tr';
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
}


const TableRow: React.FC<TableRowProps> = ({ product: Product, onToggleEditModal }) => {
  const handleDeleteProduct = async () => {
    await deleteProduct(Product.id)
  }

  const handleAddQuantity = async () => {
    const newAmount: number = Number(Product.amount) + 1;
    await updateAmount(Product.id, newAmount)
  }

  const handleRemoveQuantity = async () => {
    if(Product.amount > 0){
      const newAmount: number =  Number(Product.amount) -1;
      await updateAmount(Product.id, newAmount)
    }
  }

  return (
    <Tr key={Product.id}>
      {Product.imageUrl && (
        <Td width="10%">
          <img src={Product.imageUrl} alt={Product.name} />
        </Td>
      )}
      <Td width="20%">{Product.name}</Td>
      <Td width="40%">{Product.description}</Td>
      <Td width="10%" alignCenter={true}>{Product.price}</Td>
      <Td width="10%" alignCenter={true}>{Product.amount}</Td>
      <Td width="7%" alignCenter={true}>
      <FaEdit className='action-icon' onClick={() => onToggleEditModal(Product)} />
        <FaRegTrashAlt className='action-icon' onClick={handleDeleteProduct}/>
      </Td>
      <Td width="5%" alignCenter={true}
      ><IoMdAdd className='config-icon' onClick={handleAddQuantity}/>
        <IoMdRemove className='config-icon' onClick={handleRemoveQuantity}/>
      </Td>

    </Tr>
  );
};

export default TableRow;

