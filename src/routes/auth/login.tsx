import { Input } from "components/ui/input";
import { ContextType } from "lib/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router";

export const Component = () => {
	const { toastRef } = useOutletContext<ContextType>();
	const { t } = useTranslation("auth");
	console.log("toastRef: ", toastRef);
	useEffect(() => {
		if (toastRef && toastRef.current) {
			toastRef.current.show({
				severity: "info",
				summary: "Info Message",
				detail: "Đăng nhập để tiếp tục",
				life: 3000,
			});
		}
	}, []);
	return (
		<>
			<div className="text-center mb-8">
				<h1 className="text-2xl font-bold">
					{t("login.title")}
				</h1>
				<p className="text-gray-600 mt-2">
					{t("login.subtitle")}
				</p>
			</div>
			<form id="loginForm">
				{/* Email Field */}
				<div className="mb-6">
					<label
						htmlFor="email"
						className="block text-gray-700 font-medium mb-2"
					>
						Email
					</label>
					<Input
						type="email"
						id="email"
						placeholder={t("login.emailPlaceholder")}
						required
					/>
				</div>
				{/* Password Field */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-2">
						<label
							htmlFor="password"
							className="block text-gray-700 font-medium"
						>
							{t("login.password")}
						</label>
						<Link
							to="/forgot-password"
							className="text-sm text-primary font-medium"
						>
							{t("login.forgotPassword")}
						</Link>
					</div>
					<Input
						type="password"
						id="password"
						placeholder={t("login.passwordPlaceholder")}
						required
					/>
				</div>
				{/* Remember Me & Submit */}

				<button
					type="submit"
					className="btn btn-primary w-full btn-lg justify-center"
				>
					<span>{t("login.signIn")}</span>
					<i className="fas fa-arrow-right ml-2" />
				</button>
			</form>
			{/* Divider */}
			<div className="flex items-center my-6">
				<div className="flex-1 border-t border-gray-300" />
				<div className="px-3 text-gray-500">{t("login.or")}</div>
				<div className="flex-1 border-t border-gray-300" />
			</div>
			{/* Social Login */}
			<div className="grid grid-cols-1 gap-4 mb-6">
				<button className="btn btn-lg btn-outline-dark items-center justify-center">
					<span>Google</span>
				</button>
			</div>
			{/* Sign Up Link */}
			<div className="text-center">
				<p className="text-gray-600">
					{t("login.noAccount")}&nbsp;
					<Link
						to="/register"
						className="text-primary font-medium"
					>
						{t("login.signUp")}
					</Link>
				</p>
			</div>
		</>
	);
};

export default Component;
