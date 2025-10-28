import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation('auth');
    return (
        <footer className=":uno: py-2 px-[max(50%-35.625rem,4rem)] lg:py-4 border-t">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} EZ LMS. {t('all_rights_reserved')}
            </p>
        </footer>
    )
}

export default Footer