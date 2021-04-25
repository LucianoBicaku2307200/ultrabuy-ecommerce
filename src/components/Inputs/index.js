import Dropdown from "../Dropdown";

const Inputs = ({
  dropdown,
  dropdownTitle,
  dropdownClassName,
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
          (dropdown === true ? " justify-between " : "") +
          classInput
        }`}
      >
        {icon && (
          <img
            className={`${
              iconClass + (iconPosition === "right" ? " ml-3 " : " mr-3 ")
            } w-4 h-4`}
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
        {dropdown && (
          <Dropdown
            className={dropdownClassName}
            titleContent={dropdownTitle}
            titleClassName={titleClassName}
            listContent={listContent}
            listClassName={listClassName}
          />
        )}
      </div>
    </div>
  );
};

export default Inputs;
