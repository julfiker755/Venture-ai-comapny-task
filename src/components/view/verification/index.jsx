import React, { useState } from "react";
import Title from "../../resuable/title";
import { useForm } from "react-hook-form";
import Form from "../../shared/from";
import { ShowToast } from "../../helpers/toast";


export default function Verification() {
  const from = useForm();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; 
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      const next = document.getElementById(`code-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleSubmit = async () => {
    const otpCode = otp.join("");
    console.log({ otp: otpCode });
    // Optional: Validation
    if (otpCode.length < 4) {
         ShowToast({
            type: "error",
            title: "Please enter all 4 digits of the OTP"
          });
      return;
    }

  };

  return (
    <div className="font-montserrat overflow-hidden bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png"
            alt="Logo"
            className="h-16 w-auto mb-8"
          />
          <Title
            title="OTP Verification"
            titleStyle={"text-3xl font-bold text-black"}
            text="Enter OTP Sent To jul******@gmail.com"
            textStyle={"mt-2 text-sm text-gray-500"}
          />
        </div>

        <Form className="space-y-3" from={from} onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`code-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                className="w-16 h-16 text-center text-2xl font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 !text-black"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full flex cursor-pointer justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Didn't receive the code?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Resend OTP
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
}
