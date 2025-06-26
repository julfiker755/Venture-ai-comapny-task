import React from "react";
import Title from "../../resuable/title";
import { useForm } from "react-hook-form";
import Form from "../../shared/from";
import { FromInput } from "../../resuable/from-input";
import { forgetSchema} from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ForgetPassword() {
    const from = useForm({
        resolver: zodResolver(forgetSchema),
        defaultValues: {
          email: ""
        },
      });

      const handleSubmit = async (values) => {
        console.log(values)
        // const res = await userLogin(values).unwrap();
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
            title="Forgot Password"
            titleStyle={"text-3xl font-bold text-black"}
            text="Enter your email below to reset your password"
            textStyle={"mt-2 text-sm text-gray-500"}
          />
        </div>

        <Form className="space-y-3" from={from} onSubmit={handleSubmit}>
          <FromInput
            label="Email"
            name="email"
            placeholder="Enter your email"
          ></FromInput>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex cursor-pointer justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Login
          </button>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Remember your password?,{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
               Login
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
}
