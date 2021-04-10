import Image from "../Image/index";

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
        "flex justify-center px-2 py-2 rounded-md items-center focus:outline-none text-sm font-bold outline-none ease-linear transition-all duration-200 hover:shadow-md " +
        className +
        (iconPosition === "left" ? " flex-row-reverse" : " flex-row ") +
        (disabled ? " cursor-not-allowed" : "")
      }
      onClick={onClick && handleClick}
      disabled={disabled}
    >
      {content}
      {icon ? <Image className="mx-1" icon={icon} alt="" /> : ""}
    </button>
  );
};

export default Button;
