import { useState } from "react"
import SelectHobbies from "./select-hobbies";



export default function User2() {

    const [name,setName]= useState('');
    const [lastName, setLastName]= useState('');
    const [mail, setMail]= useState('');

    return(
        <>
        <input value={name} onChange={(n) => setName(n.target.value)} />
        <input value={lastName}  onChange={(ln) => setLastName(ln.target.value)} />
        <input value={mail} type="email" onChange={(m) => setMail(m.target.value)}/>

        {
            name != '' && lastName != '' ? <SelectHobbies name={name} lastName={lastName}/>: <div></div>
        }
        
        </>
    )
}