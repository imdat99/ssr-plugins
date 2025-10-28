import { Outlet, redirect, type RouteObject } from "react-router";
import { createElement as _c } from "react";
const routes: RouteObject[] = [
	{
		id: "root",
		// ErrorBoundary: () => jsx('div', { className: 'p-6' }, 'Something went wrong!'),
		HydrateFallback: () => _c("div", { className: "p-6" }, "Loading..."),
		lazy: () => import("./root"),
		children: [
			{
				path: "",
				Component: Outlet,
				children: [
					{
						// index: true,
						path: "",
						lazy: async () => ({
							Component: (await import("./home")).default,
						}),
						children: [
							{
								index: true,
								Component: () => _c("div", { className: "p-6" }, "Welcome to EZ LMS!"),
							},
						],
					},
					{
					},
				],
			},
			{
				path: "*",
				Component: () =>
					_c("div", { className: "p-6" }, "404 Not Found"),
			},
		],
	},
];
export default routes;
