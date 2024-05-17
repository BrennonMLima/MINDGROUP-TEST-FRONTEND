import React from "react";
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";

interface ModalAddProps {
  onClose?: () => void; // Função para fechar o modal
}

const ModalAdd: React.FC<ModalAddProps> = ({ onClose }) => {
  return (
    <div className="board column">
      <ModalHeader />
      <div className="name-input">
        <ModalLabel title="Produto" type="text" placeholder="Produto" />
        <ModalLabel title="Descrição" type="text" placeholder="Descrição" />
        <ModalLabel title="Preço" type="number" placeholder="" />
        <ModalLabel title="Quantidade" type="number" placeholder="" />
        <ModalLabel title="Imagem" type="image" />
        <Button onClick={onClose}>Salvar</Button> {/* Botão para fechar o modal */}
      </div>
    </div>
  );
};

export default ModalAdd;
