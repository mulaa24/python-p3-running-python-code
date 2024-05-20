import React,{useState} from 'react'
function MyComponent(){
const [name,setName]=useState("Guest")

const [quantity,setQuantity]=useState()

const [comment,setComment]=useState()


function handleNameChange(event){
    setName(event.target.value)
}

function handleQuantity(event){
    setQuantity(event.target.value)

}
function handleComment(e){
    setComment(e.target.value)
}
return(
    <div>
        <input value={name} onChange={ handleNameChange}></input>
        <p>Name:{name}</p>

        <input value={quantity} onChange={handleQuantity} type="number"></input>
        <p>Quantity:{quantity}</p>

        <input value={comment} onChange={handleComment}></input>
        <p>comment:{comment}</p>
    </div>
)
  
}
export default MyComponent

//use state theory ...actually its the use state pluss events combined 