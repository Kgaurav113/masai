import React, { useState } from 'react'

const Pens = () => {
    const [counter, setCounter] = useState(10);
  return (
    <div className="items">
        <span>Pens:</span>
        <button className="addPen" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remPen" onClick={() =>{
             if (counter > 0) {
                setCounter(counter-1)
            }
        }}>
            -
        </button>
        <span className="totalPens">{counter}</span>
    </div>
  )
}

export default Pens;