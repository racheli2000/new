
import _ from 'lodash';
import { useState } from 'react';


export default function List(props) {

const [colors, setColors]= useState(['red', 'blue', 'yellow', 'green', 'pink', 'orange']);

const changeColor = (c) => {
    const temp=[...colors]
    temp[0]= c;
    setColors(temp);
}
    return(
        <>
        <h1>My Colors!!!</h1>
        {colors.map(color => {
            return(
                <>          

                {/* <input type="checkbox"/>
                <label key={color}>{color}</label> */}
                
                <div style={{backgroundColor: color}}>{color}</div>
                <br></br><br></br>              
                </>
            )
        })}
        <button onClick={() => setColors(_.shuffle(colors))}>shuffle</button>
        <br></br><br></br>

        <input  onChange={(c) => changeColor(c.target.value)}/>

        {/* <input  onChange={(c) => setColors(c.target.value)}/> */}


        </>
    )
}