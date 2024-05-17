import React from 'react';
import Text from '../atoms/text/text';
import { BsPersonFillGear } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Text variant="h1">Mind Stock</Text>
      </div>
      <div className='profile'>
        <Text>Brennon (brennon@gmail.com)</Text>
        <BsPersonFillGear className='config-icon'/>
      </div>
    </header>
  );
};

export default Header;
