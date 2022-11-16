import {
  AUTH_ACCESS_TOKEN_KEY,
  AUTH_TOKEN_TYPE_KEY,
  AUTH_USER_KEY
} from "@service/constants/auth.constant";
import { CookieSetOptions } from "universal-cookie";
import {AuthDataType, AuthStateType} from "@service/types/auth-slice.type";
import useStorage from "./use-storage";
import {useCookies} from "react-cookie";
import {afterDays} from "@service/utils/date";

const defaultCookieOptions: CookieSetOptions = {
  sameSite: 'strict',
  expires: afterDays(14)
}

function useAuth(): [AuthStateType, (data: AuthDataType) => void, () => void] {
  const [user, setUser, removeUser] = useStorage({key: AUTH_USER_KEY});
  const [cookies, setCookie, removeCookie] = useCookies();

  const accessToken = cookies[AUTH_ACCESS_TOKEN_KEY] || false;
  const tokenType = cookies[AUTH_TOKEN_TYPE_KEY] || false;

  function setAuth({user, accessToken, tokenType}: any) {
    setUser(user);
    setCookie(AUTH_ACCESS_TOKEN_KEY, accessToken, defaultCookieOptions);
    setCookie(AUTH_TOKEN_TYPE_KEY, tokenType, defaultCookieOptions);
  }

  function clearAuth() {
    removeUser();
    removeCookie(AUTH_ACCESS_TOKEN_KEY);
    removeCookie(AUTH_TOKEN_TYPE_KEY);
  }

  return [
    {data: {accessToken, tokenType, user}, hasToken: !!accessToken},
    setAuth,
    clearAuth
  ]
}

export default useAuth