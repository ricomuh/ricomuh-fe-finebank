import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { NotifContext } from "../../context/notifContext";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  // const [theme, setTheme] = useState(themes[0]);
  const { setTheme } = useContext(ThemeContext);
  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { name, setIsLoggedIn, setName } = useContext(AuthContext);
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balances",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transactions",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bills",
    },
    {
      id: "expense",
      link: "/expense",
      icon: <Icon.Expense />,
      label: "Expenses",
    },
    {
      id: "goal",
      link: "/goal",
      icon: <Icon.Goal />,
      label: "Goals",
    },
    {
      id: "setting",
      link: "/setting",
      icon: <Icon.Setting />,
      label: "Settings",
    },
  ];

  const { navigate } = useNavigate();

  const refreshToken = localStorage.getItem("refreshToken");

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Logout successful" });

      setIsLoggedIn(false);
      setName("");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      if (error.response) {
        // setOpen(true);
        // setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  };

  return (
    <div className={`bg-defaultBlack`}>
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant={`text-sm sm:text-2xl`} />
          </NavLink>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div className="md:flex md:gap-2">
          Themes
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
              onClick={() => setTheme(t)}
            ></div>
          ))}
        </div>
        <div>
          <NavLink
            // to="/logout"
            onClick={handleLogout}
            className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white"
          >
            <div className="mx-auto sm:mx-0">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </NavLink>
          <div className="border-b my-10 border-b-special-bg"></div>
          <NavLink to="/profile" className="flex justify-between">
            <div className="mx-auto sm:mx-0 self-center">
              <img src="images/profile.png" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold">{name}</div>
              <div className="text-xs">View Profile</div>
            </div>
            <div className="hidden sm:block self-center">
              <Icon.KebabMenu />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
