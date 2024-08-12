import { twMerge } from "tailwind-merge";
import Loader from "./Loader";

const Button = ({ className, disabled, loading, children, ...rest }) => {
  return (
    <button
      className={twMerge(
        `disabled:bg-slate-600 ${!disabled && "active:scale-95"}`,
        className
      )}
      {...rest}
      disabled={disabled}
    >
      <div className="flex gap-2 items-center justify-center">
        {!disabled ? (
          children
        ) : loading ? (
          <span className="flex gap-2 items-center justify-center">
            {children} <Loader />{" "}
          </span>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

export default Button;
