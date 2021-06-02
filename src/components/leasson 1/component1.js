
import React from 'react';

export default function Component1 (props) {

    return(
        <>

            <h1>Component number 1</h1>

            <h2>{props.number}</h2>

            <input value={props.number}  onChange={(n) => props.changeNumber(n.target.value)}/>

            
        </>
    )

}