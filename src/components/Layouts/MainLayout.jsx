import { useContext } from "react";
import PropTypes from "prop-types";
import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { ThemeContext } from "../../context/themeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import { DarkThemeContext } from "../../context/darkThemeContext";

const MainLayout = (props) => {
  const { children } = props;

  const { theme } = useContext(ThemeContext);
  const { darkTheme } = useContext(DarkThemeContext);
  const { msg, open, setOpen, isLoading, setIsLoading } =
    useContext(NotifContext);
  return (
    <div
      className={`flex w-screen min-h-screen max-w-full ${theme.name} ${
        darkTheme ? "dark bg-gray-900" : "bg-special-mainBg"
      }`}
    >
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
        {msg && (
          <CustomizedSnackbars
            open={open}
            setOpen={setOpen}
            severity={msg.severity}
            message={msg.desc}
          />
        )}
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
// export default MainLayout;
