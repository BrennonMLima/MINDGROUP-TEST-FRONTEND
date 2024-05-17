import React, { useState } from 'react';
import TableHeader from '../molecules/tableHeader';
import TableRow from '../molecules/tableRow';
import ModalEdit from './modalEdit';

interface Product {
  name: string;
  description: string;
  price: number;
  amount: number;
  id: number;
  image?: string;
}

const products = [
  { name: 'Panqueca', description: 'Panqueca Super Gostosa', price: 20.50, amount: 4, id: 1, image: "https://github.com/ruanmlopes.png" },
  { name: 'Arroz Doce', description: 'Arroz Doce Gelado com Canela', price: 12.50, amount: 5, id: 2, image: "https://github.com/ruanmlopes.png" },
  { name: 'Feijoada', description: 'Feijoada completa', price: 35.90, amount: 3, id: 3, image: "https://github.com/ruanmlopes.png" },
  { name: 'Lasanha', description: 'Lasanha de carne', price: 25.00, amount: 2, id: 4, image: "https://github.com/ruanmlopes.png" },
  { name: 'Pudim', description: 'Pudim de leite condensado', price: 15.00, amount: 6, id: 5, image: "https://github.com/ruanmlopes.png" },
  { name: 'Coxinha', description: 'Coxinha de frango', price: 3.50, amount: 20, id: 6, image: "https://github.com/ruanmlopes.png" },
];

interface TableGridProps {
  onToggleEditModal: (product: Product) => void;
}

const TableGrid: React.FC<TableGridProps> = ({ onToggleEditModal }) => {
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleToggleEditModal = (product: Product) => {
    setSelectedProduct(product);
    onToggleEditModal(product);
  };

  return (
    <div className='table'>
      <TableHeader />
      {products.map((product) => (
        <TableRow key={product.id} product={product} onToggleEditModal={() => handleToggleEditModal(product)} />
      ))}
    </div>
  );
};

export default TableGrid;
