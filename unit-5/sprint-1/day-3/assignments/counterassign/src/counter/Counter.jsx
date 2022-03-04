import { useState } from "react"
export function Counter(props){
  console.log(props.num)
    const [counter , setCounter] = useState(0);
    const handleClick = (value) =>{
      setCounter(counter+value);
    }
    return(
      <div className="mid">
         <h2>Counter: {counter}</h2>
          <button onClick={() => handleClick(1)}>
            ADD</button>
            <button onClick={() => handleClick(-1)}>
            SUB</button>  
            <button onClick={() => {
              setCounter(counter*2);
            }}>
            DOUBLE</button>
      </div>
    );
}