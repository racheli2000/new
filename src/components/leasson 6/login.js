import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import actions from "../leasson 5/redux/actions";


export default function Login(){

    const data = useSelector(state => state.data);
    const dispatch= useDispatch();
    let refNeme= useRef("");
    let refAge= useRef("");
    const [nameValue, setNameValue]= useState();
    const [ifEmpty, setIfEmpty] =useState(false);
    

    function setAllDetails () {

        dispatch(actions.setName(refNeme.current.value));

        dispatch(actions.setAge(refAge.current.value));

        setNameValue(refNeme.current.value);

      setIfEmpty(true)


    }

    if(nameValue){
        return <Redirect to="/SUCCESS"/>
    }
    
    if(ifEmpty){
        return <Redirect to={{pathname: "/LOGIN", state: {flash: "please enter your name"}}}/>
    }

    return(
        <>
        <h2>LOGIN PAGE</h2>
        <br></br>
        <label>name</label>
        <input type="text" ref={refNeme} type="string"></input>
        <br></br>
        <label>age</label>
        <input type="text" ref={refAge} type="string"></input>
        <br></br>
        <button type="button" onClick={setAllDetails}>save</button>
        </>
    )
}