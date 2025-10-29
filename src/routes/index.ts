import { Outlet, redirect, type RouteObject } from "react-router";
import { createElement as _c } from "react";
const routes: RouteObject[] = [
	{
		id: "root",
		lazy: () => import("./root"),
		children: [
			{
				Component: Outlet,
				children: [
					{
						// index: true,
						path: "",
						lazy: () => import("./landing-pages"),
						children: [
							{
								index: true,
								lazy: () => import("./landing-pages/home"),
							},
						],
					},
					{
					},
				],
			},
			{
				lazy: () => import("./auth"),
				children: [
					{
						path: "login",
						lazy: () => import("./auth/login"),
					},
					{
						path: "register",
						lazy: () => import("./auth/register"),
					},
					{
						path: "forgot-password",
						lazy: () => import("./auth/forgot-password"),
					}
				]
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
