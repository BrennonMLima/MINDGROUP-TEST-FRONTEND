import React, { useState } from 'react';
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";

interface Product {
  name: string;
  description: string;
  price: number;
  amount: number;
  id: number;
  image?: string;
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
  const [editedAmount, setEditedAmount] = useState(editedProduct ? editedProduct.amount.toString() : "");
  const [editedImage, setEditedImage] = useState(editedProduct ? editedProduct.image || "" : "");

  const handleSave = () => {
    if (onSave) {
      onSave({
        id: editedProduct?.id || 0,
        name: editedName,
        description: editedDescription,
        price: parseFloat(editedPrice),
        amount: parseInt(editedAmount),
        image: editedImage
      });
    }
    onClose && onClose();
  };

  if (!editedProduct) return null;

  return (
    <div className="board column">
      <ModalHeader title="Edição de Produtos"/>
      <div className="name-input">
        <ModalLabel title="Produto" type="text" placeholder="Produto" value={editedName} onChange={setEditedName} />
        <ModalLabel title="Descrição" type="text" placeholder="Descrição" value={editedDescription} onChange={setEditedDescription} />
        <ModalLabel title="Preço" type="number" placeholder="" value={editedPrice} onChange={setEditedPrice} />
        <ModalLabel title="Quantidade" type="number" placeholder="" value={editedAmount} onChange={setEditedAmount} />
        <ModalLabel title="Imagem" type="image" placeholder="" value={editedImage} onChange={setEditedImage} />
        <Button onClick={handleSave}>Salvar</Button>
      </div>
    </div>
  );
};

export default ModalEdit;
