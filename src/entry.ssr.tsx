import { Context, Next } from "hono";
import { renderToReadableStream } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import routes from "./routes";

export const renderer = async (c: Context, next: Next) => {
    const ssrAssets = await import("virtual:ssr-assets");
    const { query, dataRoutes } = createStaticHandler(routes);
    const context = await query(c.req.raw);
    if (context instanceof Response) {
        return context;
    }
    const router = createStaticRouter(dataRoutes, context);
    const html = await renderToReadableStream(<StaticRouterProvider
        router={router}
        context={context}
        nonce="the-nonce"
    />, {
        bootstrapModules: ssrAssets.bootstrapModules,
    })
    return new Response(html, {
        headers: {
            "content-type": "text/html;charset=utf-8",
        },
    });
};