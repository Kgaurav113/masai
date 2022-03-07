import React, { useState } from 'react'

const Inkpens = () => {
    const [counter, setCounter] = useState(78);
  return (
    <div className="items">
        <span>InkPens:</span>
        <button className="addInkpen" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remInkpen" onClick={() =>{
             if (counter > 0) {
                setCounter(counter-1)
            }
        }}>
            -
        </button>
        <span className="totalInkpens">{counter}</span>
    </div>
  )
}

export default Inkpens;