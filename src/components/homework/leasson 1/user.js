import { useState } from "react"
import ShowUser from "./show-user";

export default function User() {

    const [name, setName]= useState("");
    const [lastName, setLastName]= useState("");
    const [address, setAddress]= useState("");
    const [age, setAge]= useState();
    const [bornDate, setBornDate]= useState();



    return(
        <>
        <input value={name} placeholder="name" onChange={(n) => setName(n.target.value)}></input>
        <br></br><br></br>

        <input value={lastName} placeholder="last name" onChange={(n) => setLastName(n.target.value)} placeholder={lastName}></input>
        <br></br><br></br>

        <input value={address} placeholder="address" onChange={(n) => setAddress(n.target.value)} placeholder={address}></input>
        <br></br><br></br>

        <input value={age} placeholder="age" type="number" onChange={(n) => setAge(n.target.value)} placeholder={age}></input>
        <br></br><br></br>

        <input value={bornDate}  type="date"  onChange={(n) => setBornDate(n.target.value)} placeholder={bornDate}></input>

        <ShowUser name={name} lastName={lastName} address={address} age={age} bornDate={bornDate}/>
        </>
    )
}