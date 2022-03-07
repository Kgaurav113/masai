import React, { useState } from 'react'

const Notebooks = () => {
    const [counter, setCounter] = useState(44);
  return (
    <div className="items">
        <span>NoteBooks:</span>
        <button className="addNotebook" onClick={() =>{
            setCounter(counter+1)
        }}>
            +
        </button>
        <button className="remNotebook" onClick={() =>{
            if (counter > 0) {
                setCounter(counter-1)
            }
        }}>
            -
        </button>
        <span className="totalNotebooks">{counter}</span>
    </div>
  )
}

export default Notebooks;