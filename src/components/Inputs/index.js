const Inputs = ({
  label,
  onChange,
  value,
  placeholder,
  className,
  error,
  errorMessage,
  focused,
  icon,
  iconPosition,
  classLabel,
  classInput,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    // handleChange();
    console.log(e.target.value);
  };
  return (
    <div className={"flex flex-col " + className}>
      <label
        className={
          "font-bold text-xs transition-colors duration-100 leading-normal mb-1 " +
          classLabel
        }
      >
        {error ? errorMessage : label}
      </label>
      <div
        className={`flex px-4 py-2 text-sm transition-all duration-200 border rounded-lg items-center justify-between ${
          (error ? " border-red-500 " : " border-C1-C ") +
          (iconPosition === "right" ? " flex-row-reverse " : "") +
          classInput
        }`}
      >
        {icon && (
          <img
            className={`${
              iconPosition === "right" ? "ml-3 " : "mr-3 "
            } w-4 h-4`}
            src={icon}
            alt=""
          />
        )}
        <input
          className={` placeholder-C1-D  focus:outline-none flex-1`}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
