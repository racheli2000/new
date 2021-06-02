
import React from 'react';

export default function FirstComponent () {
    let number=11
    return(
        <>
        <h1>Hello Racheli!</h1>
        <br></br>
        {
            number > 10 ? <label>the number is big</label>: <label>the number is small</label>
        }
        <br></br><br></br>
        {
            number > 10 && <label>the number is big</label>
        }
        </>
    )
}

