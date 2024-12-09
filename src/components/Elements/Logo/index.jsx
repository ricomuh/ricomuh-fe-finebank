import PropTypes from "prop-types";
import { ThemeContext } from "../../../context/themeContext";
import { useContext } from "react";

const Logo = (props) => {
  const { variant = "text-primary text-4xl" } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center font-poppins tracking-wide ${variant}`}
      style={{
        color: theme.color,
      }}
    >
      <span className="font-bold ">FINE</span>bank
      <span className="font-bold">.IO</span>
    </div>
  );
};

Logo.propTypes = {
  variant: PropTypes.string,
};

// export default Logo;

export default Logo;
