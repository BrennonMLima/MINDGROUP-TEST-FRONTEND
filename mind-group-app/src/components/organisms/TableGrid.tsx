import React from 'react';
import styled from 'styled-components';
import TableHeader from '../molecules/tableHeader';
import TableRow from '../molecules/tableRow';


const products = [
    { name: 'Panqueca', description: 'Panqueca Super Gostosa', price: 20.50, amount: 4, id: 1,image:"https://github.com/ruanmlopes.png"},
    { name: 'Arroz Doce', description: 'Arroz Doce Gelado com Canela', price: 12.50, amount: 5, id: 2,image:"https://github.com/ruanmlopes.png" },
    { name: 'Feijoada', description: 'Feijoada completa', price: 35.90, amount: 3, id: 3,image:"https://github.com/ruanmlopes.png" },
    { name: 'Lasanha', description: 'Lasanha de carne', price: 25.00, amount: 2, id: 4,image:"https://github.com/ruanmlopes.png" },
    { name: 'Pudim', description: 'Pudim de leite condensado', price: 15.00, amount: 6, id: 5,image:"https://github.com/ruanmlopes.png" },
    { name: 'Coxinha', description: 'Coxinha de frango', price: 3.50, amount: 20, id: 6,image:"https://github.com/ruanmlopes.png" },
    { name: 'Brigadeiro', description: 'Brigadeiro tradicional', price: 1.50, amount: 15, id: 7,image:"https://github.com/ruanmlopes.png" },
    { name: 'Torta de Limão', description: 'Torta de limão com merengue', price: 18.00, amount: 8, id: 8,image:"https://github.com/ruanmlopes.png" },
    { name: 'Café', description: 'Café espresso', price: 4.00, amount: 50, id: 9,image:"https://github.com/ruanmlopes.png" },
    { name: 'Mousse de Maracujá', description: 'Mousse de maracujá cremoso', price: 7.50, amount: 10, id: 10,image:"https://github.com/ruanmlopes.png" },
    { name: 'Pizza', description: 'Pizza de pepperoni', price: 30.00, amount: 2, id: 11,image:"https://github.com/ruanmlopes.png" },
    { name: 'Sanduíche', description: 'Sanduíche de presunto e queijo', price: 8.00, amount: 12, id: 12,image:"https://github.com/ruanmlopes.png" },

];


const TableGrid = () => {
    return (
        <div className='table'>
            <TableHeader />
            {products.map((Product) => (
                <TableRow key={Product.id} Product={Product} />
            ))}
        </div>

    );


};

export default TableGrid;