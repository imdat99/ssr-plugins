import { Input } from "components/ui/input";
import { ContextType } from "lib/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router";

export const Component = () => {
	const { toastRef } = useOutletContext<ContextType>();
	const { t } = useTranslation("auth");
	return (
		<>
			<div className="text-center mb-8">
				<h1 className="text-2xl font-bold">
					{t("forgot.title")}
				</h1>
				<p className="text-gray-600 mt-2">
					{t("forgot.subtitle")}
				</p>
			</div>
			<form id="loginForm" className="mb-6">
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

				<button
					type="submit"
					className="btn btn-primary w-full btn-lg justify-center"
				>
					<span>{t("common:sendRequest.title")}</span>
					<i className="fas fa-arrow-right ml-2" />
				</button>
			</form>
			{/* Sign Up Link */}
			<div className="text-center">
				<p className="text-gray-600">
					{t("forgot.rememberPassword")}&nbsp;
					<Link
						to="/register"
						className="text-primary font-medium"
					>
						{t("forgot.backToSignIn")}
					</Link>
				</p>
			</div>
		</>
	);
};

export default Component;
