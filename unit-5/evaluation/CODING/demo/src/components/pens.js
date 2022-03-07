import React, { useState } from 'react'

const Pens = () => {
    const [counter, setCounter] = useState(13);
  return (
    <div className="items">
        <span>Books:</span>
        <button className="addPen" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remPen" onClick={() =>{
            setCounter(counter-1)
        }}>
            -
        </button>
        <span className="totalPens">{counter}</span>
    </div>
  )
}

export default Pens;