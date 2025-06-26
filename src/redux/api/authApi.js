import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: "/auth",
        method: "POST",
        data,
      }),
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: "/authentication_app/signup",
        method: "POST",
        data,
      }),
    }),
    forgotPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
 useSignUpMutation
} =authApi 
