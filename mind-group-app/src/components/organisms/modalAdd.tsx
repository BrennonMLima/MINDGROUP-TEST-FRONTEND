import React from "react";
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

interface ModalAddProps {
  onClose?: () => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ onClose }) => {
  return (
    <div className="board column">
      <ModalHeader title="Entrada de Produtos"/>
      <div className="name-input">
        <ModalLabel title="Produto" type="text" placeholder="Produto" />
        <ModalLabel title="Descrição" type="text" placeholder="Descrição" />
        <ModalLabel title="Preço" type="number" placeholder="" />
        <ModalLabel title="Quantidade" type="number" placeholder="" />
        <ModalLabel title="Imagem" type="image" />
        <Button onClick={onClose}>Salvar</Button>
      </div>
    </div>
  );
};

export default ModalAdd;
