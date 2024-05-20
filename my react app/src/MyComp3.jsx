// how to update the state of an array of objects 

import React,{useState} from 'react'

function MyComp3(){
    const [cars,setCars]=useState([])
    const [carYear,setCarYear]=useState(new Date().getFullYear())
    const [carMake,setCarMake]=useState("")
    const [carModel,setCarModel]=useState("")
//keys in new car values 
function handleAddCar(){
const newCar={ year:carYear,make:carMake,model:carModel}
setCars(c =>[...c,newCar])
setCarYear(new Date().getFullYear())
setCarMake("")
setCarModel("")
}
//deletes cars 
function handleremoveCar(index){
    setCars(c=>c.filter((_,i)=>i !==index))
}
//changes the values of the cars 
function handleYearChange(event){
  //setCarYear(parseInt(event.target.value, 10));
    setCarYear(event.target.value )
}
function handleMakeChange(event){
    setCarMake(event.target.value)
}
function handleModelChange(event){
    setCarModel(event.target.value )
}
    return (<>
    <div>
        <h2>List of car objects </h2>
        <ul> 
            {cars.map((car,index)=>
            <li keyi={index} onClick={()=>handleremoveCar(index)}>
               {car.year} {car.make} {car.model}
            </li>)}
            
             </ul>
            <input type ="number " value={carYear} onChange ={handleYearChange}/>
             <input type ="number " value={carMake} onChange ={handleMakeChange} placeholder=" enter car make "/>
               <input type ="number " value={carModel} onChange ={handleModelChange} placeholder=" enter car model "/>
               <button onClick={handleAddCar}>Add car  </button>
       
    </div>
    </>)

}
export default MyComp3