import React, { useState } from "react";
import { eye, logo } from "../assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  setLoading,
  setError,
  clearError,
  loginSuccess,
} from "../features/auth/authSlice";
import { loginValidation } from "../utils/validate";

function Login() {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setUserData({
        ...user,
        [name]: value,
      })
    );
    if (error) {
      dispatch(clearError());
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    try {
      dispatch(setLoading(true));
      e.preventDefault();

      // Validate form
      const validationError = loginValidation(user);
      if (validationError) {
        dispatch(setError(validationError));
        return;
      }

      dispatch(clearError());

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(loginSuccess(user));
      console.log("Login successful:", user);
    } catch (err) {
      dispatch(setError("Login failed. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] gap-[45px] flex-col p-4">
      <div className="flex flex-col gap-3 items-center">
        <img src={logo} alt="Logo Hiredude" />
        <div className="opacity-50 text-center justify-start text-black text-2xl font-medium font-['Inter'] leading-loose">
          Admin Dashboard
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-[26px] bg-white rounded-2xl outline-[1px] outline-offset-[-1px] outline-black/20 inline-flex flex-col justify-start items-start gap-3 max-w-md w-full mx-auto"
      >
        <div className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="flex flex-col justify-start items-start gap-6 w-full">
            <div className="text-[#1d293d] text-2xl font-semibold leading-9 text-left w-full">
              Log in to continue
            </div>
            {error && (
              <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <div className="text-[#62748e] text-lg font-medium leading-relaxed">
                Email
              </div>
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <div className="h-16 px-5 py-4 bg-white rounded-xl outline-[1px] outline-offset-[-1px] outline-[#cad5e2] inline-flex justify-start items-center gap-2 w-full overflow-hidden">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={user.email}
                    onChange={handleChange}
                    className="flex-1 text-[#1d293d] text-lg font-normal leading-loose outline-none bg-transparent placeholder:text-[#cad5e2]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-end w-full">
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <div className="text-[#62748e] text-lg font-medium leading-relaxed">
                Password
              </div>
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <div className="h-16 px-5 py-4 bg-white rounded-xl outline-[1px] outline-offset-[-1px] outline-[#cad5e2] inline-flex justify-start items-center gap-2 w-full overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your Password"
                    value={user.password}
                    onChange={handleChange}
                    className="flex-1 text-[#1d293d] text-lg font-normal leading-loose outline-none bg-transparent placeholder:text-[#cad5e2]"
                  />
                  <img
                    src={eye}
                    alt="Password visibility toggle"
                    className="cursor-pointer"
                    onClick={togglePassword}
                  />
                </div>
              </div>
            </div>
            <Link
              to="/forgot-password"
              className="text-[#505050] text-sm font-normal leading-loose cursor-pointer text-decoration-none"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`cursor-pointer h-16 px-9 py-5 bg-gradient-to-r from-[#4cb7a3] to-blue-700 rounded-xl inline-flex justify-center items-center gap-4 w-full overflow-hidden ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            <span className="text-white text-lg font-semibold leading-loose">
              {isLoading ? "Logging in..." : "Login"}
            </span>
          </button>
        </div>

        <Link
          to="/signup"
          className="text-center text-decoration-none text-[#62748e] text-lg font-medium leading-relaxed w-full cursor-pointer"
        >
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
