import { useState } from "react";
function TwowayBinding()
{
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
    return(
        <div>
            TwowayBinding
            <input onChange={changeName} value={name}></input>
            <p>the name is {name}</p>
        </div>
    )
}
export default TwowayBinding;