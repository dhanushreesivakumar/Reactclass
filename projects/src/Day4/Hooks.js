import { useState } from "react"
function StateFunction()
{
    const[count,SetCount]=useState(0);
    const changeCount=()=>SetCount(count+1);
    const decreCount=()=>SetCount(count-1);
    return(
        <div>
            <h1>count{count}</h1>
            <button onClick={changeCount}>count+</button>
            <button onClick={decreCount}>count-</button>
        </div>
    )
}
export default StateFunction;