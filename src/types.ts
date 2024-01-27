export enum Token {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
}

export type RegisterParams<D = any> = {
  inn?: string;
  password: string;
  userinfo: D;
  recaptchaToken?: string;
  roles?: string | string[];
} & (
  | { email: string; emailConfirmCode: string }
  | { phone: string; phoneConfirmCode: string }
);

export type LoginParams = {
  credential: string;
  registrationToken?: string;
  recapthcaToken?: string;
  remoteAddress?: string;
} & ({ password: string } | { code: string });

export type ResetPasswordParams = {
  code: string;
  token: string;
  password: string;
} & ({ phone: string } | { email: string });

export type UpdateUserInfoParams<D = any> = {
  accessToken: string;
  userinfo: D;
};

export type ChangeLoginParams = {
  accessToken: string;
  email: string;
  emailConfirmCode?: string;
  phone: string;
  phoneConfirmCode?: string;
};

export type ConfirmEmailParams =
  | { token: string }
  | { code: string; email: string };

export type GetOAuthLinkParams = {
  type: "vk" | "fb" | "g+" | "ya" | "apple";
  redirect_uri: string;
};

export type SendConfirmCodeParams = ({ email: string } | { phone: string }) & {
  use_call: boolean;
};

export type OauthLoginParams = {
  type: "vk" | "fb" | "g+" | "ya" | "apple";
  code: string;
  redirect_uri: string;
};

export type GetTelegramAuthLinkParams = {
  headers: { origin: string };
  data: { redirect_uri: string };
};

export type ConfirmPhoneParams = {
  code: string;
  phone: string;
};
