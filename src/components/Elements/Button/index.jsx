import PropTypes from "prop-types";

const Button = (props) => {
  const { children, variant, type, disabled } = props;

  return (
    <button
      className={`h-12 rounded-md text-sm ${variant}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.string,
};

export default Button;
