import React from 'react';
import Text from '../atoms/text/text';
import { title } from 'process';

interface ModalTile {
    title: string;
  }

  const ModalHeader: React.FC<ModalTile> = ({ title }) => {
    return (
        <div>
            <Text variant="h1">{title}</Text>
        </div>
        )
}
export default ModalHeader;