import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import actions from "../leasson 5/redux/actions";

export default function Swapi() {

    const [id, setId]= useState();
    const data= useSelector(state => state.swapi);
    const dispatch= useDispatch();

    function save (id){
        debugger
        dispatch(actions.getDetails(id))
    }


    return(
        <>
        <label>id:</label>
            <input type="text" onChange={(e) => save(e.target.value)}></input>

            <h2>
                <label>id: {data.id}</label>
            </h2>
            <h2>
                <label>name: {data.name}</label>
            </h2>
        </>
    )
    
}