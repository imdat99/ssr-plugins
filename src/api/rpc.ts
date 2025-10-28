import { exposeTinyRpc, httpServerAdapter, validateFn } from "@hiogawa/tiny-rpc";
import { tinyassert } from "@hiogawa/utils";
import { type Context, type Next } from "hono";
import { getContext } from "hono/context-storage";
import { z } from "zod";
// import { createElement } from "react";

let counter = 0;
const routes = {
    // define as a bare function
    checkId: (id: string) => {
        const context = getContext();
    console.log(context.req.raw.headers);
        return id === "good"},

    checkIdThrow: (id: string) => {
      tinyassert(id === "good", "Invalid ID");
      return null;
    },

    getCounter: () => counter,

    // define with zod validation + input type inference
    incrementCounter: validateFn(z.object({ delta: z.number().default(1) }))(
      (input) => {
        // expectTypeOf(input).toEqualTypeOf<{ delta: number }>();
        counter += input.delta;
        return counter;
      }
    ),

    // access context
    checkAuth: () => {
        return true;
    //   return request.headers.get("x-auth") === "good";
    },
    components: async() => {
    },
  };
export type RpcRoutes = typeof routes;
const endpoint = "/rpc";
export const pathsForGET: (keyof typeof routes)[] = ["getCounter"];
// export const rpcServer = 
//   compose(
//     (ctx) => {
//       ctx.handleError = () => {
//         return new Response(null, { status: 500 });
//       };
//     },
//     contextProviderHandler(),
//     exposeTinyRpc({
//       routes,
//       adapter: httpServerAdapter({ endpoint, pathsForGET }),
//     }),
//     () => new Response("tiny-rpc-skipped")
//   )
export const rpcServer = async (c: Context, next: Next) => {
  const handler = exposeTinyRpc({
    routes,
    adapter: httpServerAdapter({ endpoint }),
  });
  const res = await handler({ request: c.req.raw });
  if (res) {
    return res;
  }
  return await next();
};
export const createContext = (c: Context) => {
  return {
    request: c.req.raw,
  };
};