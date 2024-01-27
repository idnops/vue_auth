import type { App, Plugin } from "vue";
import { Router } from "vue-router";
import useToken from "./token";
import { Token } from "./types";

const initAuth = (app: App, options: { router: Router }) => {
  app.config.globalProperties.authOptions = options;

  const { router } = options;
  const { getToken } = useToken();

  const token = getToken(Token.ACCESS_TOKEN);

  router.beforeEach(() => {
    if (token) {
      return { name: "Home" };
    }
  });
};

const authPlugin: Plugin = {
  install: initAuth,
};

export default authPlugin;
