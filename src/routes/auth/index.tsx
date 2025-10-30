import React, { useMemo, useRef } from "react";
import { LoaderFunction, Outlet, useMatches } from "react-router";
import { Toast } from 'primereact/toast';
import { useTranslation } from "react-i18next";
export const Component = () => {
	const toastRef = useRef<Toast>(null);
	const {t} = useTranslation();
	const matches = useMatches();
	const matchRoute = useMemo(() => {
		return matches[matches.length - 1];
	}, [matches]);

	return (
		<main className="flex-grow flex flex-col items-center justify-center p-4">
			<title>{t(matchRoute.id)}</title>
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center mb-4">
						<span className="text-2xl font-bold">
							EZ<span className="text-yellow-500">Lms</span>
						</span>
					</div>
					<h1 className="text-3xl font-bold">
						Đăng nhập tài khoản
					</h1>
					<p className="text-gray-600 mt-2">
						Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục
					</p>
				</div>
				{/* Login Form */}
				<div className="bg-white border rounded-2xl p-8 shadow-[.25rem_.25rem_0] shadow-primary-dark/60 border-primary">
					 <Outlet context={{ toastRef }}/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
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
				</div>
			</div>
        	<Toast ref={toastRef}/>
		</main>
	);
};
export default Component;
