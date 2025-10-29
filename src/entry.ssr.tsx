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
import { I18nextProvider } from "react-i18next";
import { SWRConfig } from "swr";

export const renderer = async (c: Context, next: Next) => {
	const { query, dataRoutes } = createStaticHandler(routes);
	const context = await query(c.req.raw);
	if (context instanceof Response) {
		return context;
	}
	const nonce = crypto.randomUUID();
	const router = createStaticRouter(dataRoutes, context);
	const routeKey = router.state.matches.at(-1)?.route.id || ''
  	const loadedData = context.loaderData[routeKey] || {}
	// const i18n = await i18nServer(c.req.raw);
	const html = await renderToReadableStream(
		<SWRConfig
			value={{
				revalidateOnMount: false,
				revalidateIfStale: false,
				// provider: () => new Map(),
				...loadedData,
			}}
		>
			<I18nextProvider i18n={c.get("i18n-instance")}>
				<StaticRouterProvider context={context} router={router} nonce={nonce} />
			</I18nextProvider>
		</SWRConfig>
		,
		{
			bootstrapModules,
			nonce,
		},
	);
	return new Response(html, {
		headers: {
			"content-type": "text/html;charset=utf-8",
			"Content-Encoding": "Identity",
			"nonce": nonce,
		},
	});
};
// export async function i18nServer(request: Request): Promise<i18n> {
// 	// console.log("request", request)
// 	const context = await new Promise<RouterContextProvider>(
//     (resolve) => {
//       // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//       const routerContextProvider: any = {
//         get: (key: string) => {
//           // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//           return (routerContextProvider as any)[key];
//         },
//       };
//       i18nextMiddleware(
//         {
//           request,
//           context: {
//             // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//             set: (key: string, value: any) => {
//               Object.assign(routerContextProvider, {
//                 [key]: value,
//               });
//             },
//           } as RouterContextProvider,
//           params: {},
//         },
//         (() => {
//           resolve(routerContextProvider);
//           // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//         }) as any
//       );
//     }
//   )
//   console.log("context", context)
//   return getInstance(context);
// };