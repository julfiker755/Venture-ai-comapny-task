import React from "react";
import Title from "../../resuable/title";
import { useForm } from "react-hook-form";
import Form from "../../shared/from";
import { FromInput } from "../../resuable/from-input";
import { loginSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpMutation } from "../../../redux/api/authApi";

export default function Login() {
    const [signUp]=useSignUpMutation()
    const from = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });

      const handleSubmit = async (values) => {
        console.log(values)
        const res = await signUp(values).unwrap();
        console.log(res)
        // if (res?.accessToken) {
        //   setLocalStroage(authKey, res.accessToken);
        //   const user = decodedToken(res.accessToken);
        //   setAuthInfo(user);
        //   setAuthToken(authToken, res.authToken, {
        //     route: user.role,
        //   });
        //   ShowToast({
        //     type: "success",
        //     title: "Login Successful",
        //     description: "You have successfully logged in",
        //   });
        //   from.reset();
      };

  return (
    <div className="font-montserrat overflow-hidden bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png"
            alt="Logo"
            className="h-16 w-auto mb-8"
          />
          <Title
            title="Hello, Welcome!"
            titleStyle={"text-3xl font-bold text-black"}
            text="Please Enter Your Details Below To Continue"
            textStyle={"mt-2 text-sm text-gray-500"}
          />
        </div>

        <Form className="space-y-3" from={from} onSubmit={handleSubmit}>
          <FromInput
            label="Email"
            name="email"
            placeholder="Enter your email"
          ></FromInput>
          <FromInput
            eye={true}
            label="Password"
            name="password"
            placeholder="Enter your password"
          ></FromInput>
          <div>
            {/* Remember me & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-900 dark:text-gray-300">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2">Remember Me</span>
              </label>
              <a
                href="/forget-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex cursor-pointer justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Login
          </button>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Create account,{" "}
            <a
              href="/sign-up"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              sign up
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
}
