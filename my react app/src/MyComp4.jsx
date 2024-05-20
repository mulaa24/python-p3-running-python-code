 //use effect hook 
import React,{useState,useEffect} from 'react'
 function MyComp4(){

    const[count,setCount]=useState(0)
     const[color,setColor]=useState("green")
    useEffect(()=>{
        document.title=`Count:${count} ${color}`
        console.log("I like sushi")
 },[count,color])
function addClick(){
    setCount(count+1)
}


function redClick(){
    setCount(count-1)

}
function resetClick(){
setCount(0)
}
function changeColor(){
    setColor(c=>c === "green"? "red" : "green")
}
    return (
        <>
        <p style={{color:color}}>count:{count}</p>
        <div>
        <button onClick={addClick}>increment</button>
        <button onClick={redClick}>decrement</button>
        <button onClick={resetClick}>reset</button> <br/>
        <button onClick={changeColor}>change color</button>
        </div>
        </>
    )

 }
 export default MyComp4