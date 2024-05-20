import React,{useState} from 'react'

function MyComp2(){
const[foods,setFoods]=useState(["apple","orange","banana"])
//adds foods 
function handleAddFood(){
const newFood= document.getElementById("foodInput").value
document.getElementById("foodInput").value=""
setFoods(f=>[...f,newFood])
}
// removes  food 
function handleRemoveFood(index){

setFoods(foods.filter((_,i)=>i !==index))

}
return (
    <>
    <h2>List of food </h2>
    <ul>
        {foods.map((food,index)=>
        <li key={index} onClick={()=>handleRemoveFood(index)}>{food} </li>)}
    </ul>  
    <input type="text" id="foodInput" placeholder="Enter food name "/>
    <button onClick ={handleAddFood}>add food  </button>
    </>
)
}
// button that adds food above 
export default MyComp2

//update of state of an array using react 