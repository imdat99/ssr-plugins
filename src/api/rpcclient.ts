import { httpClientAdapter, proxyTinyRpc } from "@hiogawa/tiny-rpc";
import type { RpcRoutes } from "./rpc";
declare let __host__: string
const endpoint = "/rpc";
const url = import.meta.env.SSR ? __host__ : "";
const headers: Record<string, string> = {}; // inject headers to demonstrate context
export const client = proxyTinyRpc<RpcRoutes>({
  adapter: httpClientAdapter({
    url: url + endpoint,
    pathsForGET: [],
    fetch: async (url, input) => {
      const res = await fetch(url, {
        ...input,
        headers: {
          ...input?.headers,
          ...headers,
        },
      });
      return res;
    },
  }),
});
