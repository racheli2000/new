
import React, { useRef } from 'react';
import {useDispatch} from 'react-redux';
import actions from './redux/actions';

export default function InsertPupil() {

    const name= useRef('');
    const id= useRef('');
    const dispatch= useDispatch();


    function insertPupil() {
        dispatch(actions.addPupil({name: name.current.value, id: id.current.value}));
    }

    return(
        <>
        <input type="text" placeholder="name" ref={name}/>
        <input type="number" placeholder="id" ref={id}/>
        <button onClick={insertPupil}>add</button>
        </>
    )
}