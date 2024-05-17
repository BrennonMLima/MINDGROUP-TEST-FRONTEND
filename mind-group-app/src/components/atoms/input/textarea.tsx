interface TextAreaProps {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
  }
  
  const TextArea: React.FC<TextAreaProps> = ({onChange, className }) => {
    return (
      <textarea
        name="Pesquisar"
        id=""
        placeholder="Pesquisar"
        onChange={onChange}
        className={className}
      />
    );
  };
  
export default TextArea;