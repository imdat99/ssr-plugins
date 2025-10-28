import React from 'react'
import Footer from './Footer';
import { client } from 'api/rpcclient';

const Home = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold">EZ LMS</h1>
                </div>
            </header>
            <main className='flex-grow container mx-auto p-4'>
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
            </main>

            <Footer />
        </>

    )
}

export default Home