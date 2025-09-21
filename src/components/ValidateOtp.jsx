import React, { useState } from "react";

function ValidateOtp({ loading, handleValidateOtp, onChangeOtp }) {
  const [otpInputs, setOtpInputs] = useState(Array(6).fill(""));

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    if (isNaN(value)) return;
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    const completeOtp = newOtpInputs.join("");
    onChangeOtp({ target: { value: completeOtp } });

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpInputs[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <form
      onSubmit={handleValidateOtp}
      className="p-7 bg-white rounded-2xl outline-[1px] outline-offset-[-1px] outline-black/20 flex flex-col justify-start items-start gap-3 max-w-[440px] w-full mx-auto"
    >
      <div className="flex flex-col justify-start items-start gap-5 w-full">
        <div className="h-[200px] flex flex-col justify-start items-start gap-6 w-full">
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <div className="text-[#1d293d] text-2xl font-semibold leading-9">
              Verify your Email
            </div>
            <div className="text-[#6e6e6e] text-lg font-normal leading-relaxed">
              OTP sent on your email
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <div className="text-[#62748e] text-lg font-medium leading-relaxed">
              Enter OTP
            </div>
            <div className="flex justify-start items-center gap-2 w-full">
              <div className="flex justify-center items-center gap-2 w-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    maxLength={1}
                    value={otpInputs[i]}
                    className="w-14 h-18 px-4 py-3 bg-white rounded-lg outline-[1px] outline-offset-[-1px] outline-[#cad5e2] text-center text-lg text-[#1d293d]"
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="h-24" />
        </div>
        <button
          className={`h-16 cursor-pointer px-9 py-5 bg-gradient-to-r from-[#4cb7a3] to-blue-700 rounded-xl flex justify-center items-center gap-4 w-full overflow-hidden hover:opacity-90 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
        >
          <span className="text-white text-lg font-semibold leading-loose">
            {loading ? "Verifying..." : "Verify & Continue"}
          </span>
        </button>
      </div>
    </form>
  );
}

export default ValidateOtp;
