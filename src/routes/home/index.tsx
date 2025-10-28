import React from 'react'
import Footer from './Footer';

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
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </main>
    
    <Footer />
    </>
    
  )
}

export default Home