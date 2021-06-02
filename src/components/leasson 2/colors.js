import { useState } from "react"
import List from "./list";


export default function Colors() {

    const [color, setColor]= useState("");
    const [colors,setColors]= useState([]);


    const save = () => {
        setColors(colors.concat(color))
    }

    return(
        <>
        <input value={color} placeholder="enter a color" onChange={(c) => setColor(c.target.value)}/>
        <button onClick={save()} colors={colors} setColors={setColors}>save</button>

        <List/>
        </>
    )
}