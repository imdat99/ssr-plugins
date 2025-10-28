import { jsx } from "react/jsx-runtime";
import { Outlet, redirect, type RouteObject } from "react-router";
const routes: RouteObject[] = [
	{
		id: "root",
		// ErrorBoundary: () => jsx('div', { className: 'p-6' }, 'Something went wrong!'),
		HydrateFallback: () => jsx("div", { className: "p-6" }, "Loading..."),
		lazy: () => import("./root"),
		children: [
			{
				path: "",
				Component: Outlet,
				children: [
					{
						index: true,
						lazy: async () => ({
							Component: (await import("./home")).default,
						}),
					},
				],
			},
			{
				path: "*",
				Component: () =>
					jsx("div", { className: "p-6" }, "404 Not Found"),
			},
		],
	},
];
export default routes;
