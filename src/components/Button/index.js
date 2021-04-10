const Button = ({
  className,
  content,
  disabled,
  onClick,
  icon,
  iconPosition,
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className={
        "flex justify-center items-center focus:outline-none text-sm font-bold outline-none transition-all duration-200 " +
        className +
        (iconPosition === "left" ? " flex-row-reverse" : " flex-row ") +
        (disabled ? " cursor-not-allowed" : "")
      }
      onClick={onClick && handleClick}
      disabled={disabled}
    >
      {content} <img className="mx-1" src={icon} alt="" />
    </button>
  );
};

export default Button;
