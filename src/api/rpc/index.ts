import {
	exposeTinyRpc,
	httpServerAdapter,
	validateFn,
} from "@hiogawa/tiny-rpc";
import { tinyassert } from "@hiogawa/utils";
import { MiddlewareHandler, type Context, type Next } from "hono";
import { getContext } from "hono/context-storage";
import { register } from "module";
import { z } from "zod";
import { authMethods } from "./auth";
import { jwt } from "hono/jwt";
import { secret } from "./commom";
// import { createElement } from "react";

let counter = 0;
const routes = {
	// define as a bare function
	checkId: (id: string) => {
		const context = getContext();
		console.log(context.req.raw.headers);
		return id === "good";
	},

	checkIdThrow: (id: string) => {
		tinyassert(id === "good", "Invalid ID");
		return null;
	},

	getCounter: () => {
		const context = getContext();
		console.log(context.get("jwtPayload"));
		return counter;
	},

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
		const context = getContext();
		console.log(context.req.raw.headers);
		return true;
	},
	components: async () => {},
	getHomeCourses: async () => {
		const listCourses = [
			{
				id: 1,
				title: "Lập trình Web Fullstack",
				description:
					"Học cách xây dựng ứng dụng web hoàn chỉnh từ frontend đến backend.",
				category: "Lập trình",
				rating: 4.9,
				price: "1.200.000 VNĐ",
				icon: "fas fa-code",
				bgImg: "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Web%20Fullstack",
				slug: "lap-trinh-web-fullstack",
			},
			{
				id: 2,
				title: "Phân tích dữ liệu với Python",
				description:
					"Khám phá sức mạnh của Python trong việc phân tích và trực quan hóa dữ liệu.",
				category: "Phân tích dữ liệu",
				rating: 4.8,
				price: "900.000 VNĐ",
				icon: "fas fa-chart-bar",
				bgImg: "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Data%20Analysis",
				slug: "phan-tich-du-lieu-voi-python",
			},
			{
				id: 3,
				title: "Thiết kế UI/UX chuyên nghiệp",
				description:
					"Học các nguyên tắc thiết kế giao diện và trải nghiệm người dùng hiện đại.",
				category: "Thiết kế",
				rating: 4.7,
				price: "800.000 VNĐ",
				icon: "fas fa-paint-brush",
				bgImg: "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=UI/UX%20Design",
				slug: "thiet-ke-ui-ux-chuyen-nghiep",
			},
		];
		return listCourses;
	},
	...authMethods
};
export type RpcRoutes = typeof routes;
export const endpoint = "/rpc";
export const pathsForGET: (keyof typeof routes)[] = ["getCounter"];
export const jwtRpc: MiddlewareHandler = async (c, next) => {
	const publicPaths: (keyof typeof routes)[] = ["login", "register"];
	const isPublic = publicPaths.some((path) => c.req.path.split("/").includes(path));
	// return await next();
	if (c.req.path !== endpoint && !c.req.path.startsWith(endpoint + "/") || isPublic) {
		return await next();
	}
	console.log("JWT RPC Middleware:", c.req.path);
	const jwtMiddleware = jwt({
		secret,
		cookie: 'auth_token',
		verification: {
			aud: "ez.lms_users",
		}
	})
	return jwtMiddleware(c, next)
}
export const rpcServer = async (c: Context, next: Next) => {
	if (c.req.path !== endpoint && !c.req.path.startsWith(endpoint + "/")) {
		return await next();
	}
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
