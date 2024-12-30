import Input from "./Input";
import Label from "./Label";
import PropTypes from "prop-types";

const LabeledInput = (props) => {
  const { label, name, type, placeholder, register } = props;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
      />
    </>
  );
};

// define proptypes for LabeledInput
LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
};

export default LabeledInput;
