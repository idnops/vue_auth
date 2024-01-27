import { fetch } from "./fetch";
import {
  ChangeLoginParams,
  ConfirmEmailParams,
  ConfirmPhoneParams,
  GetOAuthLinkParams,
  GetTelegramAuthLinkParams,
  LoginParams,
  OauthLoginParams,
  RegisterParams,
  ResetPasswordParams,
  SendConfirmCodeParams,
  UpdateUserInfoParams,
} from "./types";

const useApi = () => {
  const register = (data: RegisterParams) => {
    return fetch("api/register", {
      method: "post",
      data,
    });
  };

  const getUserInfo = (accessToken: string) => {
    return fetch("api/getUserInfo", {
      method: "post",
      data: {
        accessToken,
      },
    });
  };

  const getPublicKey = () => {
    return fetch("api/getPublicKey", {
      method: "post",
      data: {},
    });
  };

  const login = (data: LoginParams) => {
    return fetch("api/login", {
      method: "post",
      data,
    });
  };

  const resetPassword = (data: ResetPasswordParams) => {
    return fetch("api/resetPassword", {
      method: "post",
      data,
    });
  };

  const getRecaptchaSiteKey = () => {
    return fetch("api/getRecaptchaSiteKey", {
      method: "post",
      data: {},
    });
  };

  const updateUserInfo = (data: UpdateUserInfoParams) => {
    return fetch("api/updateUserInfo", {
      method: "post",
      data,
    });
  };

  const getLegalEntityInfo = (inn: string) => {
    return fetch("api/getLegalEntityInfo", {
      method: "post",
      data: { inn },
    });
  };

  const getIndividualStatus = (inn: string) => {
    return fetch("api/getIndividualStatus", {
      method: "post",
      data: { inn },
    });
  };

  const changeLogin = (data: ChangeLoginParams) => {
    return fetch("api/changeLogin", {
      method: "post",
      data,
    });
  };

  const sendEmailConfirmationLink = (email: string) => {
    return fetch("api/sendEmailConfirmationLink", {
      method: "post",
      data: { email },
    });
  };

  const sendPasswordResetLink = (email: string) => {
    return fetch("api/sendPasswordResetLink", {
      method: "post",
      data: { email },
    });
  };

  const confirmEmail = (data: ConfirmEmailParams) => {
    return fetch("api/confirmEmail", {
      method: "post",
      data,
    });
  };

  const getOAuthLink = (data: GetOAuthLinkParams) => {
    return fetch("api/getOAuthLink", {
      method: "post",
      data,
    });
  };

  const logout = (refreshToken: string) => {
    return fetch("api/logout", {
      method: "post",
      data: { refreshToken },
    });
  };

  const regenerateTokens = (refreshToken: string) => {
    return fetch("api/regenerateTokens", {
      method: "post",
      data: { refreshToken },
    });
  };

  const sendConfirmCode = (data: SendConfirmCodeParams) => {
    return fetch("api/sendConfirmCode", {
      method: "post",
      data,
    });
  };

  const oauthLogin = (data: OauthLoginParams) => {
    return fetch("api/oauthLogin", {
      method: "post",
      data,
    });
  };

  const telegramLogin = (tgAuthResult: string) => {
    return fetch("api/telegramLogin", {
      method: "post",
      data: { tgAuthResult },
    });
  };

  const getTelegramAuthLink = (options: GetTelegramAuthLinkParams) => {
    return fetch("api/getTelegramAuthLink", {
      method: "post",
      ...options,
    });
  };

  const confirmPhone = (data: ConfirmPhoneParams) => {
    return fetch("api/confirmPhone", {
      method: "post",
      data,
    });
  };

  return {
    register,
    getUserInfo,
    getPublicKey,
    login,
    resetPassword,
    getRecaptchaSiteKey,
    updateUserInfo,
    getLegalEntityInfo,
    getIndividualStatus,
    changeLogin,
    sendEmailConfirmationLink,
    sendPasswordResetLink,
    confirmEmail,
    getOAuthLink,
    logout,
    regenerateTokens,
    sendConfirmCode,
    oauthLogin,
    telegramLogin,
    getTelegramAuthLink,
    confirmPhone,
  };
};

export default useApi;
