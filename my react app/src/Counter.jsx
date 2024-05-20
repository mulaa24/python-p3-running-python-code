import React,{useState} from 'react'
function Counter(){
    const [count,setCount]=useState(0)

    const increament=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increament}>increase</button>
                <button onClick={reset}>reset</button>
                    <button onClick={decrement}>decrease</button>
        </div>
    )

}
export default Counter 
//typicall use state in action 