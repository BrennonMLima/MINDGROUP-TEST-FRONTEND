import React, { useState } from 'react';
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";
import { updateProduct } from '../../service/products';

interface Product {
  name: string;
  description: string;
  price: string;
  amount: number;
  id: string;
  imageUrl?: string;
}

interface ModalEditProps {
  onClose?: () => void;
  editedProduct?: Product | null;
  onSave?: (product: Product) => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ editedProduct, onClose, onSave }) => {
  const [editedName, setEditedName] = useState(editedProduct ? editedProduct.name : "");
  const [editedDescription, setEditedDescription] = useState(editedProduct ? editedProduct.description : "");
  const [editedPrice, setEditedPrice] = useState(editedProduct ? editedProduct.price.toString() : "");
  const [editedAmount, setEditedAmount] = useState(editedProduct ? editedProduct.amount : 0);
  const [editedImage, setEditedImage] = useState(editedProduct ? editedProduct.imageUrl || "" : "");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDescription(e.target.value);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPrice(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedImage(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    setEditedAmount(amount);
  };

  const handleSave = async() => {
    if (editedProduct) {
      await updateProduct(editedProduct.id, editedName, editedDescription, editedPrice, editedAmount, editedImage);
      if (onSave) onSave(editedProduct);
    }
  };

  if (!editedProduct) return null;

  return (
    <div className="board column">
      <ModalHeader title="Edição de Produtos"/>
      <div className="name-input">
        <ModalLabel title="Produto" type="text" placeholder="Produto" value={editedName}  onChange={handleNameChange}/>
        <ModalLabel title="Descrição" type="text" placeholder="Descrição" value={editedDescription} onChange={handleDescriptionChange}/>
        <ModalLabel title="Preço" type="number" placeholder="" value={editedPrice}  onChange={handleValueChange}/>
        <ModalLabel title="Quantidade" type="number" placeholder="" value={editedAmount} onChange={handleAmountChange} />
        <ModalLabel title="Imagem" type="text" placeholder="" value={editedImage} onChange={handleImageChange}/>
        <Button onClick={handleSave}>Salvar</Button>
      </div>
    </div>
  );
};

export default ModalEdit;
