import React from 'react';

interface InputProps {
  type?: 'text' | 'image' | 'number'; // Input type
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, className }) => {
  switch (type) {
    case 'text':
      return (
        <input
          type="text"
          placeholder={placeholder}
          className={'text-input'}
        />
      );
    case 'image':
      return (
        <div className={'image-input'}>
          <input
            type="file"
          />
        </div>
      );
    case 'number':
      return (
        <input
          type="number"
          placeholder={placeholder}
          className={'number-input'}
        />
      );
    default:
      return <input type="text" placeholder={placeholder} className={className} />;
  }
};

export default Input;
