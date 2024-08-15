import { twMerge } from "tailwind-merge";

const Select = ({ label, id, disabled, className, items = [], ...rest }) => {
  return (
    <div className="input_group w-full">
      <select
        className={twMerge("select input-bordered w-full", className)}
        disabled={disabled}
        id={id}
        name={id}
        {...rest}
      >
        <option disabled value="">
          {label}
        </option>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
