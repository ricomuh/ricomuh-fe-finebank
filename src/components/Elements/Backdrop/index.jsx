import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
export default function SimpleBackdrop(props) {
  const { isLoading, setIsLoading } = props;

  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

// define proptypes for SimpleBackdrop
SimpleBackdrop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
