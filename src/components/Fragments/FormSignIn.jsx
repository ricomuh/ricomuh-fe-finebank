import { useForm } from "react-hook-form";
import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import axios from "axios";
import { useContext, useState } from "react";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const { msg, setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      const decoded = jwtDecode(response.data.refreshToken);
      // console.log(decoded);

      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoggedIn(true);
      setName(decoded.name);

      navigate("/");
      // console.log(response);
      setIsLoading(false);
      setOpen(true);
      setMsg({
        message: "Login successful",
        severity: "success",
      });
    } catch (error) {
      if (error.response) {
        setIsLoading(false);
        // console.log(error.response);
        // setMsg(error.response.data.msg);
        setOpen(true);
        setMsg({
          message: error.response.data.msg,
          severity: "error",
        });
      }
    }
  };

  const handleErrors = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn, handleErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }),
          }}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }),
          }}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button
        variant="bg-primary w-full text-white"
        type="submit"
        disabled={isValid ? "" : "disabled"}
      >
        Login
      </Button>
      {msg && (
        <CustomizedSnackbars
          open={open}
          setOpen={setOpen}
          severity={msg.severity}
          message={msg.message}
        />
      )}
    </form>
  );
};

export default FormSignIn;
