const Button = ({ className, content, disabled, onClick }) => {
  return (
    <button
      className={`rounded-full flex-auto px-4 py-2 w-auto outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
