const Button = ({ className, content, disabled, onClick }) => {
  let buttonstyle = ``;
  if (disabled) {
    buttonstyle = `cursor-not-allowed rounded-full flex-auto px-4 py-2 w-auto outline-none focus:outline-none mr-1 mb-1 ${className}`;
  } else {
    buttonstyle = `rounded-full flex-auto px-4 py-2 w-auto outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${className}`;
  }
  return (
    <button className={buttonstyle} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
