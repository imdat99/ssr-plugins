import { sign } from "hono/jwt";
import { secret } from "./commom";
import {
  deleteCookie,
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  generateCookie,
  generateSignedCookie,
} from 'hono/cookie'
import { getContext } from "hono/context-storage";
interface RegisterModel {
    username: string;
    password: string;
    email: string;
}
const register = async (registerModel: RegisterModel) => {
    return true
};
const login = async (username: string, password: string) => {
    const context = getContext();
    const token = await sign({
        username,
        password,
        exp: Math.floor(Date.now() / 1000) + 60 * 20, // 10 minutes expiration
        iat: Math.floor(Date.now() / 1000),
        iss: "ez.lms",
        aud: "ez.lms_users",
    }, secret);
    setCookie(context, 'auth_token', token, { httpOnly: true, secure: true, sameSite: "Lax", path: '/', maxAge: 60 * 20 });
    return null;
}
export const authMethods = {
    register,
    login,
}