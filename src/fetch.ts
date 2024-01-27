import axios, { Method } from "axios";

const instance = axios.create({
  timeout: 5000,
});

interface fetchOptions<D = any> {
  method: Method;
  data?: D;
  params?: any;
  headers?: any;
}

const fetch = (url: string, options: fetchOptions) => {
  const method = options.method || "get";

  return instance[method](url, options.data, options.params);
};

export { fetch };
