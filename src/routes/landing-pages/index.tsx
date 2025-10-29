import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

export const Component = () => {
    return (
        <>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </>

    )
}