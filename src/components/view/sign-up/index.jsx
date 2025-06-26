import React from "react";
import Title from "../../resuable/title";
import { useForm } from "react-hook-form";
import Form from "../../shared/from";
import { FromInput } from "../../resuable/from-input";
import {signupSchema } from "../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpMutation } from "../../../redux/api/authApi";

export default function SignUp() {
    const [signUp]=useSignUpMutation()
    const from = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          email: "",
          password: "",
          confirm_password:""
        },
      });

      const handleSubmit = async (values) => {
        const res = await signUp(values).unwrap();
        console.log(res)
       
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
            title="Create account"
            titleStyle={"text-3xl font-bold text-black"}
            text="Enter The Email Address Associated With Your Account. We'll Send You An OTP To Your Email."
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
          <FromInput
            eye={true}
            label="Confirm Password"
            name="confirm_password"
            placeholder="Enter your password"
          ></FromInput>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex cursor-pointer justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </button>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Already Have An Account?,{" "}
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
