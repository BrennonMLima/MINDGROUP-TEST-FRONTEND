import React, { useEffect, useState } from 'react';
import TableHeader from '../molecules/tableHeader';
import TableRow from '../molecules/tableRow';
import { getAllProducts } from '../../service/products';


interface Product {
  name: string;
  description: string;
  price: string;
  amount: number;
  id: string;
  imageUrl?: string;
}

interface TableGridProps {
  onToggleEditModal: (product: Product) => void;
}

const TableGrid: React.FC<TableGridProps> =  ({ onToggleEditModal }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[] | []>([])

useEffect(()=>{
  getAllProducts().then((response)=>{
    const {data: {products}} = response
    setProducts(products);
  });
}, [])

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
