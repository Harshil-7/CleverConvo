import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    retrieveUser: builder.query({
      query: () => "/users/me/",
    }),
    socialAuthenticate: builder.mutation({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/jwt/create/",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({
        first_name,
        last_name,
        phone_number,
        email,
        password,
        re_password,
      }) => ({
        url: "/users/",
        method: "POST",
        body: {
          first_name,
          last_name,
          phone_number,
          email,
          password,
          re_password,
        },
      }),
    }),
    verify: builder.mutation({
      query: (token) => ({
        url: "/jwt/verify/",
        method: "POST",
        body: { token },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout/",
        method: "POST",
      }),
    }),
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: "/users/activation/",
        method: "POST",
        body: { uid, token },
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "/users/reset_password/",
        method: "POST",
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ uid, tokenk, new_password, re_new_password }) => ({
        url: "/users/reset_password_confirm/",
        method: "POST",
        body: { uid, tokenk, new_password, re_new_password },
      }),
    }),
    setPassword: builder.mutation({
      query: ({ current_password, new_password, re_new_password }) => ({
        url: "/users/set_password/",
        method: "POST",
        body: { current_password, new_password, re_new_password },
      }),
    }),
  }),
});

export const {
  useRetrieveUserQuery,
  useSocialAuthenticateMutation,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useSetPasswordMutation,
} = authApiSlice;
