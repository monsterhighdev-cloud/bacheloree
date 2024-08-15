import { twMerge } from "tailwind-merge";

const Input = ({
  label,
  id,
  placeholder = "",
  disabled,
  className,
  type = "text",
  ...rest
}) => {
  return (
    <div className="input_group w-full">
      <label
        className={twMerge(
          "input input-bordered flex items-center gap-2",
          className
        )}
      >
        <span className="label border-e pe-4">{label}</span>
        <input
          placeholder={placeholder}
          className="ps-2 w-full"
          disabled={disabled}
          id={id}
          name={id}
          type={type}
          {...rest}
        />
      </label>
    </div>
  );
};
export default Input;
