import React from 'react';
import Input from '../atoms/input/input';
import Text from '../atoms/text/text';

interface InputTypes {
  title: string;
  type?: "number" | "text" | "image";
  placeholder?: string;
  className?: string;
}

const ModalLabel: React.FC<InputTypes> = ({ title, type, placeholder, className }) => {
  return (
    <div>
      <Text variant="p">{title}</Text>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
};

export default ModalLabel;
