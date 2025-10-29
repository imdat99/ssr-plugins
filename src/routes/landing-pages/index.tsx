import React from 'react'
import Footer from './Footer';
import { client } from 'api/rpcclient';
import Header from './Header';
import { Outlet } from 'react-router';

const Home = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            {/* <main className='flex-grow container mx-auto p-4'>
                <div>
                    <title>EZ LMS</title>

                    <h1>Home</h1>
                    <p>Count: {count}</p>
                    <div className='btn-group'>
                        <button className='btn btn-info' onClick={() => {
                            client.incrementCounter({ delta: 1 }).then((newCount) => {
                                setCount(newCount);
                            });
                        }}>Increment</button>
                        <button className='btn btn-secondary' onClick={() => {
                            client.getCounter().then((currentCount) => {
                                setCount(currentCount);
                            });
                        }}>Refresh</button>
                    </div>

                </div>
            </main> */}
            <Footer />
        </>

    )
}

export default Home