import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className=":uno: py-4 px-[max(50%-35.625rem,4rem)] lg:py-6 border-t border-t-gray-200 text-center bg-white">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} EZ LMS. {t('all_rights_reserved')}
            </p>
        </footer>
    )
}

export default Footer