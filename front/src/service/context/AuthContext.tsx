import { createContext, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import useLogin from "../../hooks/login/useLogin";
import { LoginPayload } from "../login/types";

interface IAuthContext {
  isAuthenticated: boolean;
  token: string;
  isLoading: boolean;
  errorMessage: string;
  signIn: (payload: LoginPayload) => void;
  clearState: () => void
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { mutateAsync: loginRequest, isLoading, reset } = useLogin();

  const router = useRouter();

  function clearState() {
    setIsAuthenticated(false);
    setErrorMessage("");
    setToken("");
    reset;
  }

  async function signIn(payload: LoginPayload) {
    await loginRequest(payload, {
      onSuccess: (res) => {
        setCookie(undefined, "web-portal-user-email", payload.email)
        setCookie(undefined, "webportal-token-nav", res.data.token)
        router.push(res.data.userType)
        setIsAuthenticated(true)
      },
      onError: (e) => {
        //@ts-ignore
        setErrorMessage(e?.response.data);
      },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        signIn,
        errorMessage,
        token,
        clearState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
