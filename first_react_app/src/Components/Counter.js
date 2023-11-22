import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement =()=>{
        setCount(count - 1);
    }

  return (
    <div>
    <p>Counter app</p>
    <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
