import React, { useState } from 'react'

const  = () => {
    const [counter, setCounter] = useState(13);
  return (
    <div className="items">
        <span>Books:</span>
        <button className="addInkpen" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remBook" onClick={() =>{
            setCounter(counter-1)
        }}>
            -
        </button>
        <span className="totalBooks">{counter}</span>
    </div>
  )
}

export default Books;