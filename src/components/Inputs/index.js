import Dropdown from "../Dropdown";

const Inputs = ({
  dropdown,
  dropdownTitle,
  titleClassName,
  listContent,
  listClassName,
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
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    // handleChange();
    console.log(e.target.value);
  };
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
        className={`flex transition-all duration-700 border rounded-lg items-center ${
          (error ? " border-red-500 " : " border-C1-C ") +
          (iconPosition === "right" ? " flex-row-reverse " : "") +
          (dropdown === true ? " justify-between " : "") +
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
          className={`placeholder-C1-D focus:outline-none focus:border flex items-center`}
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {dropdown && (
          <Dropdown
            titleContent={dropdownTitle}
            titleClassName={titleClassName}
            listClassName={listClassName}
            listContent={listContent}
          />
        )}
      </div>
    </div>
  );
};

export default Inputs;
