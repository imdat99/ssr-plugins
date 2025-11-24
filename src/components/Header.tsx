import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

const listLinks = [
    { name: 'home', href: '#home' },
    { name: 'courses', href: '#courses' },
    { name: 'features', href: '#features' },
    // { name: 'pricing', href: '#pricing' },
    { name: 'contact', href: '#contact' },
]

const Header = () => {
    const { t } = useTranslation()

    return (
        <header className="sticky top-0 z-50 border-b border-b-gray-200 bg-white">
            <div className="container mx-auto py-2 flex justify-between items-center px-4">
                <div className="">
                    <span className="text-xl font-bold">EZ-Lms</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    {
                        listLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-primary">{t(`landing-page.header.${link.name}`)}</a>
                        ))
                    }
                </nav>

                <div className="flex items-center space-x-4">
                    <Link to="/login" className="btn btn-outline-dark">Đăng nhập</Link>
                </div>
            </div>
        </header>
    )
}

export default Header