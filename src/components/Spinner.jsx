import { BarLoader } from "react-spinners";

const overrride = {
  display: "block",
  margin: "0 auto 40px auto",
};

const Spinner = ({ color = "blue", size = "150" }) => {
  return (
    <div>
      <BarLoader
        color={color}
        size={size}
        cssOverride={overrride}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Spinner;
