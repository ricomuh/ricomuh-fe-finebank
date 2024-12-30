import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";

export default function CustomizedSnackbars(props) {
  const { open, setOpen, severity, message } = props;

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
          <span className="text-lg">{message}</span>
        </Alert>
      </Snackbar>
    </div>
  );
}

CustomizedSnackbars.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
