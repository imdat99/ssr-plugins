import { Context, Next } from "hono";
import { createElement as _c } from "react";
import { renderToReadableStream } from "react-dom/server";
import {
	createStaticHandler,
	createStaticRouter,
	StaticRouterProvider,
} from "react-router";
import { bootstrapModules } from "virtual:ssr-assets";
import routes from "./routes";

export const renderer = async (c: Context, next: Next) => {
	const { query, dataRoutes } = createStaticHandler(routes);
	const context = await query(c.req.raw);
	if (context instanceof Response) {
		return context;
	}
	const ahihi = 12;
	const nonce = "the-nonce";
	const router = createStaticRouter(dataRoutes, context);
	const html = await renderToReadableStream(
		_c(StaticRouterProvider, { context, router, nonce }),
		{
			bootstrapModules,
			nonce,
		},
	);
	return new Response(html, {
		headers: {
			"content-type": "text/html;charset=utf-8",
			"Content-Encoding": "Identity",
		},
	});
};
