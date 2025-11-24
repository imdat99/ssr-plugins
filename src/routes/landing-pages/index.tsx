import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "../../components/Header";
import { generateUserIdBase64 } from "lib/utils";
import { useRoute } from "lib/hooks/useRoute";
import { Activity } from "react";
export const Component = () => {
	const matchRoute = useRoute()
	const isLecture = matchRoute.id === "lecture-view"
	return (
		<>
			<Activity mode={isLecture ? "hidden" : "visible"}>
				<Header />
			</Activity>
			<main className="flex-grow">
				<Outlet />
			</main>
			{/* {import.meta.env.SSR && <div
				suppressHydrationWarning
				className="ssrWaterMark"
				style={{
					backgroundImage:
						`url('${generateUserIdBase64('Datlt_ssr_watermark_1')}'), url('${generateUserIdBase64('Datlt_ssr_watermark_2')}')`,
					backgroundRepeat: "repeat, repeat",
					backgroundPosition: "130px 130px, 0 0",
					position: "fixed",
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
					pointerEvents: "none",
					zIndex: 100,
				}}
			/>} */}
			<Activity mode={isLecture ? "hidden" : "visible"}>
				<Footer />
			</Activity>
		</>
	);
};
