import { useState } from "react";

function StateHold()
{
    const[vehicle,setVehicle]=useState({no:"1234",brand:"audi",year:"2015"})
    const changeVehicle=()=>
    {
        setVehicle((prevState)=>{return{...prevState,year:2024}})
    }
    return(
        <div>
            <p>vehicle no {vehicle.no}</p>
            <p>vehicle brand {vehicle.brand}</p>
            <p>vehicle year={vehicle.year}</p>
            <button onClick={changeVehicle}>change me</button>
        </div>
    )
}
export default StateHold;