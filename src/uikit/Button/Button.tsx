import React from 'react';

type ButtonProps = {
  text?: string;
  styleBtn?: string;
  styleBtnText?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  type?: string;
};

const Button: React.FC<ButtonProps> = ({
  styleBtn,
  styleBtnText,
  text,
  handleClick,
  isDisabled,
  type,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${styleBtn} ${isDisabled ? 'disabled' : ''}`}
      type={type}
    >
      <span className={styleBtnText}>{text}</span>
    </button>
  );
};

export default Button;
