import Cookies from "js-cookie";
import { Token } from "./types";
const useToken = () => {
  const key = "auth_token";

  const getToken = (token: Token) => {
    return Cookies.get(token);
  };

  const setToken = (key: Token, token: string) => {
    return Cookies.set(key, token);
  };

  const removeToken = (key: Token) => {
    return Cookies.remove(key);
  };

  return { key, getToken, setToken, removeToken };
};

export default useToken;
