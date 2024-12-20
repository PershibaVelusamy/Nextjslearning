'use client'

import React, { useState } from 'react'

const Course = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>setCount(prev=> prev+1)}>Add</button>
        <button onClick={()=>setCount(prev => prev-1)}>Sub</button>
    </div>
  )
}

export default Course