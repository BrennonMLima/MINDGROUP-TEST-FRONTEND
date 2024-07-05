import React, { useState } from "react";
import ModalLabel from "../molecules/modalLabel";
import ModalHeader from "../molecules/modalHeader";
import Button from "../atoms/button/button";
import { createProduct} from "../../service/products";

interface ModalAddProps {
    onSave: (name: string,
    descripton: string,
    value: string,
    amount: number,
    imageUrl: string,) => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({onSave}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };
const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value)
    setAmount(amount);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct(name,description,price,amount,image);
    onSave(name,description,price,amount,image);
    }

  return (
    <div className="board column">
      <form onSubmit={handleSubmit}>
      <ModalHeader title="Entrada de Produtos" />
      <div className="name-input">
        <ModalLabel title="Produto" type="text" placeholder="Produto" value={name} onChange={handleNameChange} />
        <ModalLabel title="Descrição" type="text" placeholder="Descrição" value={description} onChange={handleDescriptionChange} />
        <ModalLabel title="Preço" type="number" placeholder="" value={price} onChange={handleValueChange} />
        <ModalLabel title="Quantidade" type="number" placeholder="" value={amount} onChange={handleAmountChange} />
        <ModalLabel title="Imagem" type="text" placeholder="" value={image} onChange={handleImageChange} />
        <Button type='submit'>Salvar</Button>
      </div>
      </form>
    </div>
  );
};

export default ModalAdd;
