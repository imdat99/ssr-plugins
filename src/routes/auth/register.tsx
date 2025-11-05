import { Input } from "components/ui/input";
import { ConfirmPopup } from "primereact/confirmpopup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Component = () => {
	const { t } = useTranslation("auth");
	return (
		<>
			<div className="text-center mb-8">
				<h1 className="text-2xl font-bold">{t("register.title")}</h1>
				<p className="text-gray-600 mt-2">{t("register.subtitle")}</p>
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
				{/* Password Field */}
				<div className="mb-6">
					<div className="flex justify-between items-center mb-2">
						<label
							htmlFor="password"
							className="block text-gray-700 font-medium"
						>
							{t("login.password")}
						</label>
					</div>
					<Input
						type="password"
						id="password"
						placeholder={t("login.passwordPlaceholder")}
						required
					/>
				</div>
				<div className="mb-6">
					<div className="flex justify-between items-center mb-2">
						<label
							htmlFor="repassword"
							className="block text-gray-700 font-medium"
						>
							{t("register.rePassword")}
						</label>
					</div>
					<Input
						type="password"
						id="repassword"
						placeholder={t("register.rePasswordPlaceholder")}
						required
					/>
				</div>
				{/* Remember Me & Submit */}
				<ConfirmPopup />
				<button
				    type="submit"
					className="btn btn-primary w-full btn-lg justify-center"
				>
					<span>{t("register.signUp")}</span>
					<i className="fas fa-arrow-right ml-2" />
				</button>
				<p className="text-xs text-gray-600 mt-4 text-center">Bằng việc đăng ký. Bạn đồng ý với các <Link to={""} className="text-primary underline italic">điều khoản</Link> của chúng tôi.</p>
			</form>
			<div className="text-center">
				<p className="text-gray-600">
					{t("register.alreadyHaveAccount")}&nbsp;
					<Link to="/login" className="text-primary font-medium">
						{t("register.signIn")}
					</Link>
				</p>
			</div>
		</>
	);
};

export default Component;
