import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("Email is required").email("Please valid email"),
    password: z.string().min(6, "Password is required"),
  });
export const forgetSchema = z.object({
    email: z.string().nonempty("Email is required").email("Please valid email"),
  });
  

  export const signupSchema = z
  .object({
    email: z.string().nonempty("Email is required").email("Please valid email"),
    password: z.string().min(6, "Password is required"),
    confirm_password: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords must match.",
  });
