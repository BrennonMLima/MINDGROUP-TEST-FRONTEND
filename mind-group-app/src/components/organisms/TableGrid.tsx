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
  shouldUpdate: boolean;
  search: string;
}

const TableGrid: React.FC<TableGridProps> = ({ onToggleEditModal, shouldUpdate, search }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data.products);
    } catch (err) {
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [shouldUpdate]);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='table'>
      <TableHeader />
      {filteredProducts.map((product) => (
        <TableRow
          key={product.id}
          product={product}
          onToggleEditModal={onToggleEditModal}
          onUpdate={fetchProducts}
        />
      ))}
    </div>
  );
};

export default TableGrid;
