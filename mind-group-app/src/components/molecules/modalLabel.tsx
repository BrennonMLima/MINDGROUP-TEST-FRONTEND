import React from 'react';
import Input from '../atoms/input/input';
import Text from '../atoms/text/text';

interface InputTypes {
  title: string;
  type?: "number" | "text" | "image";
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

const ModalLabel: React.FC<InputTypes> = ({ title, type, placeholder, className,value,onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <div>
      <Text variant="p">{title}</Text>
      <Input type={type} placeholder={placeholder} value={value} onChange={handleChange}/>
    </div>
  );
};

export default ModalLabel;

