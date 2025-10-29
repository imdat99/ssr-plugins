import {
	exposeTinyRpc,
	httpServerAdapter,
	validateFn,
} from "@hiogawa/tiny-rpc";
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
		return id === "good";
	},

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
			},
		];
		return listCourses;
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
