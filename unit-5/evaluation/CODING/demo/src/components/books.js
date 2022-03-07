import React, { useState } from 'react'

const Books = () => {
    const [counter, setCounter] = useState(13);
  return (
    <div className="items">
        <span>Books:</span>
        <button className="addBook" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remBook" onClick={() =>{
            if (counter > 0) {
                setCounter(counter-1)
            }
        }}>
            -
        </button>
        <span className="totalBooks">{counter}</span>
    </div>
  )
}

export default Books;