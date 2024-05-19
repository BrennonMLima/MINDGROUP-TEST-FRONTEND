// modalLabel.tsx
import React from 'react';
import Input from '../atoms/input/input';
import Text from '../atoms/text/text';

interface ModalLabelProps {
  title: string;
  type?: "number" | "text" | "image";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalLabel: React.FC<ModalLabelProps> = ({ title, type, placeholder, value, onChange }) => {
  return (
    <div>
      <Text variant="p">{title}</Text>
      <Input type={type} placeholder={placeholder} value={value as string} onChange={onChange}/>
    </div>
  );
};

export default ModalLabel;
