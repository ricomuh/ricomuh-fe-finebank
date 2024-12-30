import { useContext } from "react";
import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AuthContext } from "../../context/authContext";
import { ThemeContext } from "../../context/themeContext";

const Header = () => {
  const date = new Date().toDateString().slice(4);
  const { name } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`border-b-2 py-4 px-6 flex items-center justify-between ${theme.name}`}
    >
      <div className="flex">
        <div
          className="font-bold text-lg"
          style={{
            color: theme.color,
          }}
        >
          {name}
        </div>
        <div className="ms-6 text-gray-03">{date}</div>
      </div>
      <div className="flex">
        <div className="self-center">
          <NotificationsIcon className="text-gray-01 scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <Input variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
