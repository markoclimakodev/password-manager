type ButtonProps = {
  title: string;
  type: 'cancel' | 'register';
  onClick: () => void;
  isDisable: boolean;
};

export function Button({ title, type, onClick, isDisable }: ButtonProps) {
  const handleClick = () => {
    if (type === 'register' && onClick) {
      onClick();
    }
    if (type === 'cancel' && onClick) {
      onClick();
    }
  };
  return (
    <button
      className={ type === 'cancel' ? 'button unstyled-btn' : 'button styled-btn' }
      onClick={ handleClick }
      disabled={ isDisable }
    >
      {title}
    </button>
  );
}
