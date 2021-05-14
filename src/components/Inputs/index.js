const Inputs = ({
  label,
  onChange,
  value,
  type,
  placeholder,
  error,
  errorMessage,
  focused,
  icon,
  iconPosition,
  className,
  classLabel,
  classInput,
  onClickIcon,
  iconClass,
}) => {
  return (
    <div
      className={`flex rounded-lg ${
        (label === "" ? "" : " flex-col ") + className
      }`}
    >
      {label === "" ? (
        ""
      ) : (
        <label
          className={
            "font-bold text-xs transition-colors duration-100 leading-normal mb-1 " +
            classLabel
          }
        >
          {error ? errorMessage : label}
        </label>
      )}
      <div
        className={`flex text-sm bg-C1-F focus:outline-none placeholder-C1-B transition-all duration-200 border rounded-lg items-center justify-between ${
          (error ? " border-red-500 " : " border-C1-D ") +
          (iconPosition === "right" ? " flex-row-reverse " : "") +
          classInput
        }`}
      >
        {icon && (
          <img
            className={`${iconClass} w-4 h-4`}
            src={icon}
            alt=""
            onClick={onClickIcon}
          />
        )}
        <input
          className={` placeholder-C1-B bg-C1-F  focus:outline-none flex-1`}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
