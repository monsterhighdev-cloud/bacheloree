import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-between items-center">
      <FaSpinner className="animate-spin" />
    </div>
  );
};

export default Loader;
