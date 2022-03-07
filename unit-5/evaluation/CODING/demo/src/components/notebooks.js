import React, { useState } from 'react'

const Notebooks = () => {
    const [counter, setCounter] = useState(13);
  return (
    <div className="items">
        <span>Books:</span>
        <button className="addNotebook" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remNotebook" onClick={() =>{
            setCounter(counter-1)
        }}>
            -
        </button>
        <span className="totalNotebooks">{counter}</span>
    </div>
  )
}

export default Notebooks;