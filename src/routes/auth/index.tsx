import React from "react";
import { Outlet } from "react-router";

export const Component = () => {
	return (
		<main className="flex-grow flex flex-col items-center justify-center p-4">
			<div className="max-w-md w-full">
				<Outlet />
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
					<h3 className="font-bold">Truy cập nhanh</h3>
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
		</main>
	);
};

export default Component;
