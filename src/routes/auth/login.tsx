import React from "react";

export const Component = () => {
	return (
		<>
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
			<div className="bg-white border border-gray-300 rounded-2xl p-8">
				<form id="loginForm">
					{/* Email Field */}
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-gray-700 font-medium mb-2"
						>
							<i className="fas fa-envelope mr-2 text-yellow-600" />
							Email
						</label>
						<div className="relative">
							<input
								type="email"
								id="email"
								className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg input-focus transition-all"
								placeholder="nhập email của bạn"
								required
							/>
							<div className="absolute right-3 top-3 text-gray-500">
								<i
									className="fas fa-check-circle hidden text-green-500"
									id="emailValid"
								/>
							</div>
						</div>
						<p
							className="text-red-500 text-sm mt-1 hidden"
							id="emailError"
						>
							Vui lòng nhập địa chỉ email hợp lệ
						</p>
					</div>
					{/* Password Field */}
					<div className="mb-6">
						<div className="flex justify-between items-center mb-2">
							<label
								htmlFor="password"
								className="block text-gray-700 font-medium"
							>
								<i className="fas fa-lock mr-2 text-yellow-600" />
								Mật khẩu
							</label>
							<a
								href="#"
								className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
							>
								Quên mật khẩu?
							</a>
						</div>
						<div className="relative">
							<input
								type="password"
								id="password"
								className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg input-focus transition-all"
								placeholder="nhập mật khẩu của bạn"
								required
							/>
							<button
								type="button"
								className="absolute right-3 top-3 text-gray-500"
								id="togglePassword"
							>
								<i className="fas fa-eye" id="passwordIcon" />
							</button>
						</div>
						<p
							className="text-red-500 text-sm mt-1 hidden"
							id="passwordError"
						>
							Mật khẩu phải có ít nhất 6 ký tự
						</p>
					</div>
					{/* Remember Me & Submit */}
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center">
							<input
								type="checkbox"
								id="remember"
								className="h-4 w-4 text-yellow-600 border-gray-800 rounded focus:ring-yellow-500"
							/>
							<label
								htmlFor="remember"
								className="ml-2 text-gray-700"
							>
								Ghi nhớ đăng nhập
							</label>
						</div>
					</div>
					<button
						type="submit"
						className="btn btn-primary w-full btn-lg justify-center"
					>
						<span>Đăng nhập</span>
						<i className="fas fa-arrow-right ml-2" />
					</button>
				</form>
				{/* Divider */}
				<div className="flex items-center my-6">
					<div className="flex-1 border-t border-gray-300" />
					<div className="px-3 text-gray-500">hoặc</div>
					<div className="flex-1 border-t border-gray-300" />
				</div>
				{/* Social Login */}
				<div className="grid grid-cols-1 gap-4 mb-6">
					<button className="btn btn-lg btn-secondary items-center justify-center">
						<i className="fab fa-google mr-2 text-red-500" />
						<span>Google</span>
					</button>
				</div>
				{/* Sign Up Link */}
				<div className="text-center">
					<p className="text-gray-600">
						Chưa có tài khoản?
						<a
							href="#"
							className="text-yellow-600 font-medium hover:text-yellow-700"
						>
							Đăng ký ngay
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Component;
