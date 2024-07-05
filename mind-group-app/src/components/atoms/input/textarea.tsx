interface TextAreaProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, className, onChange }) => {
  return (
    <textarea
      name="Pesquisar"
      placeholder="Pesquisar"
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};

export default TextArea;
