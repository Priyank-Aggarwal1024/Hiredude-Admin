import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eye, logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import {
  setUserData,
  setLoading,
  setError,
  clearError,
  setOtp,
  setOtpRender,
} from "../features/auth/authSlice";
import ValidateOtp from "../components/ValidateOtp";
import { signupValidation } from "../utils/validate";

function Signup() {
  const dispatch = useDispatch();
  const { user, isLoading, error, otpRender, otp } = useSelector(
    (state) => state.auth
  );
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
    e.preventDefault();

    if (signupValidation(user)) {
      dispatch(setError(signupValidation(user)));
      return;
    }

    try {
      dispatch(setLoading(true));
      dispatch(clearError());
      dispatch(setUserData(user));
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(setOtpRender(true));
      console.log("Registration successful, showing OTP:", user);
    } catch (err) {
      dispatch(setError("Registration failed. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleValidateOtp = async (e) => {
    try {
      e.preventDefault();
      dispatch(setLoading(true));
      dispatch(clearError());

      if (!otp || otp.length !== 6) {
        dispatch(setError("Please enter a valid 6-digit OTP"));
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/");
      console.log("OTP verification successful");
    } catch (err) {
      dispatch(setError("OTP verification failed. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleChangeOtp = (e) => {
    dispatch(setOtp(e.target.value));
  };
  return (
    <div className="min-h-screen overflow-y-auto w-full overflow-x-hidden flex items-center justify-center bg-[#F8FAFC] gap-[45px] flex-col p-4">
      <div className="flex flex-col gap-3 items-center">
        <img src={logo} alt="Logo Hiredude" />
        <div className="opacity-50 text-center justify-start text-black text-2xl font-medium font-['Inter'] leading-loose">
          Admin Dashboard
        </div>
      </div>
      {otpRender ? (
        <ValidateOtp
          loading={isLoading}
          handleValidateOtp={handleValidateOtp}
          onChangeOtp={handleChangeOtp}
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-[26px] bg-white rounded-2xl outline-[1px] outline-offset-[-1px] outline-black/20 inline-flex flex-col justify-start items-start gap-3 max-w-md w-full mx-auto"
        >
          <div className="flex flex-col justify-start items-start gap-5 w-full">
            <div className="flex flex-col justify-start items-start gap-6 w-full">
              <div className="text-[#1d293d] text-2xl font-semibold leading-9 text-left w-full">
                Sign up to continue
              </div>

              {error && (
                <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="flex flex-col justify-start items-start gap-1 w-full">
                <div className="text-[#62748e] text-lg font-medium leading-relaxed">
                  Name
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <div className="h-16 px-5 py-4 bg-white rounded-xl outline-[1px] outline-offset-[-1px] outline-[#cad5e2] inline-flex justify-start items-center gap-2 w-full overflow-hidden">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={user.name}
                      onChange={handleChange}
                      className="flex-1 text-[#1d293d] text-lg font-normal leading-loose outline-none bg-transparent placeholder:text-[#cad5e2]"
                    />
                  </div>
                </div>
              </div>

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
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`h-16 cursor-pointer px-9 py-5 bg-gradient-to-r from-[#4cb7a3] to-blue-700 rounded-xl inline-flex justify-center items-center gap-4 w-full overflow-hidden ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "[&:hover]:opacity-90"
              }`}
            >
              <span className="text-white text-lg font-semibold leading-loose">
                {isLoading ? "Signing up..." : "Sign up"}
              </span>
            </button>
          </div>

          <Link
            to="/login"
            className="text-center text-decoration-none text-[#62748e] text-lg font-medium leading-relaxed w-full cursor-pointer"
          >
            Log in
          </Link>
        </form>
      )}
    </div>
  );
}

export default Signup;
