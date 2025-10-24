import React from 'react'

const Home = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
              <title>EZ LMS</title>
      
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Home