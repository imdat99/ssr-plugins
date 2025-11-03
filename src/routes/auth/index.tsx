import { cn } from "lib/utils";
import { Toast } from "primereact/toast";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useMatches } from "react-router";
export const Component = () => {
	const toastRef = useRef<Toast>(null);
	const { t } = useTranslation();
	const matches = useMatches();
	const matchRoute = useMemo(() => {
		return matches[matches.length - 1];
	}, [matches]);
	const isForgot = useMemo(() => matchRoute.id === "forgot", [matchRoute]);
	return (
		<main className="flex-grow flex flex-col items-center justify-center p-4 relative">
			<Link to="/" replace className="absolute top-4 left-4 text-gray-600 hover:text-primary flex items-center space-x-2">
				<i className="fas fa-arrow-left"></i>
				<span>{t("back_to_home")}</span>
			</Link>
			<title>{t(`auth:${matchRoute.id}.title`)}</title>
			<div className={cn("w-full grid grid-cols-1 gap-8 items-center", isForgot ? "max-w-lg" : "max-w-6xl lg:grid-cols-2")}>
				<div className={cn("p-8 rounded-2xl", isForgot ? "!hidden" : "hidden lg:block")}>
					<div className="flex items-center mb-4">
						<span className="text-2xl font-bold">
							EZ<span className="text-yellow-500">Lms</span>
						</span>
					</div>

					<h1 className="text-4xl font-bold mb-6">
						Bắt đầu hành trình học tập của bạn
					</h1>
					<p className="text-gray-600 text-lg mb-8">
						Tham gia cộng đồng hơn 50,000 học viên đang phát triển
						kỹ năng và thăng tiến sự nghiệp.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
						<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
							<i className="fas fa-shield-alt text-primary text-xl mb-2"></i>
							<h3 className="font-bold">Bảo mật</h3>
							<p className="text-sm text-gray-600">
								Thông tin được mã hóa
							</p>
						</div>
						<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
							<i className="fas fa-bolt text-primary text-xl mb-2"></i>
							<h3 className="font-bold">Nhanh</h3>
							<p className="text-sm text-gray-600">
								Học mọi lúc, mọi nơi
							</p>
						</div>
						<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
							<i className="fas fa-headset text-primary text-xl mb-2"></i>
							<h3 className="font-bold">Hỗ trợ 24/7</h3>
							<p className="text-sm text-gray-600">
								Đội ngũ chuyên nghiệp
							</p>
						</div>
						<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
							<i className="fas fa-infinity text-yellow-500 text-xl mb-2"></i>
							<h3 className="font-bold">
								Truy cập trọn đời
							</h3>
							<p className="text-gray-600 text-sm">
								Học mọi lúc, mọi nơi
							</p>
						</div>
					</div>

					<div className="flex items-center text-gray-600">
						<i className="fas fa-quote-left text-primary text-2xl mr-4"></i>
						<div>
							<p className="italic">"Học, học nữa, học mãi!"</p>
							<p className="font-medium mt-2">- V.I.Lenin</p>
						</div>
					</div>
				</div>
				<div className="bg-white border rounded-2xl p-4 lg:p-8 shadow-[.25rem_.25rem_0] shadow-primary-dark/60 border-primary">
					<div className="flex lg:hidden items-center mb-4 text-center justify-center">
						<span className="text-2xl font-bold">hidden
							EZ<span className="text-yellow-500">Lms</span>
						</span>
					</div>
					<Outlet context={{ toastRef }} />
				</div>
			</div>
			<Toast ref={toastRef} />
		</main>
	);
};
export default Component;
// {/* <div className="max-w-md w-full">
// 				<div className="text-center mb-8">
// 					<div className="flex items-center justify-center mb-4">
// 						<span className="text-2xl font-bold">
// 							EZ<span className="text-yellow-500">Lms</span>
// 						</span>
// 					</div>
// 					<h1 className="text-3xl font-bold">
// 						Đăng nhập tài khoản
// 					</h1>
// 					<p className="text-gray-600 mt-2">
// 						Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục
// 					</p>
// 				</div>
// 				{/* Login Form */}
// 				<div className="bg-white border rounded-2xl p-8 shadow-[.25rem_.25rem_0] shadow-primary-dark/60 border-primary">
// 					 <Outlet context={{ toastRef }}/>
// 				</div>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
// 					<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
// 						<i className="fas fa-shield-alt text-primary text-xl mb-2"></i>
// 						<h3 className="font-bold">Bảo mật</h3>
// 						<p className="text-sm text-gray-600">
// 							Thông tin được mã hóa
// 						</p>
// 					</div>
// 					<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
// 						<i className="fas fa-bolt text-primary text-xl mb-2"></i>
// 						<h3 className="font-bold">Nhanh</h3>
// 						<p className="text-sm text-gray-600">
// 							Học mọi lúc, mọi nơi
// 						</p>
// 					</div>
// 					<div className="bg-white border border-gray-300 bg-opacity-50 p-4 rounded-lg">
// 						<i className="fas fa-headset text-primary text-xl mb-2"></i>
// 						<h3 className="font-bold">Hỗ trợ 24/7</h3>
// 						<p className="text-sm text-gray-600">
// 							Đội ngũ chuyên nghiệp
// 						</p>
// 					</div>
// 				</div>
// 			</div> */}
