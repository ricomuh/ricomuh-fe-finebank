import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalPage from "./pages/goal";
import ExpensePage from "./pages/expense";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import PropTypes from "prop-types";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  RequiredAuth.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequiredAuth>
          <DashboardPage />
        </RequiredAuth>
      ),
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/balance",
      element: (
        <RequiredAuth>
          <BalancePage />
        </RequiredAuth>
      ),
    },
    {
      path: "/goal",
      element: (
        <RequiredAuth>
          <GoalPage />
        </RequiredAuth>
      ),
    },
    {
      path: "/expense",
      element: (
        <RequiredAuth>
          <ExpensePage />
        </RequiredAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
