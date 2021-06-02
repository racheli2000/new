import { result } from "lodash";
// import { useDispatch } from "react-redux";
import actions from "../actions";

export const setAlert = (store) => (next) => (action) => {
    
    if(action.type == "ADD_NEW_PUPIL")
        alert("first pupil: " + store.getState().pupils.Allpupils[0].name );
        if(action.type== 'UPDATE_PUPIL') 
            store.getState().pupils.Allpupils.forEach(element => {
                alert( element.name +" is in class number: " + store.getState().classReducer.classGrade);
            });
    return next(action);
}

    export const logAction = (store) => (next) => (action) => {
    
        alert('action:' + JSON.stringify(action));
        return next(action);
}

export const timeOut = (store) => (next) => (action) => {

    if(action.type== 'UPDATE_PUPIL')
        setTimeout(() => {return next(action)}, 1000);
    else
        return next(action);
    
}

export const setDetails = (store) => (next) => (action) => {



    if(action.type == "GET_DETAILS"){
        debugger
        let id= action.payload;
            
    fetch("https://swapi.dev/api/people/1/", {"method":"GET"})
        .then(response => response.json())
        .then(result =>{
            store.dispatch(actions.setId(id));
            store.dispatch(actions.setName(result));
            debugger
        })
        .catch(error => console.log ('error', error));
    }
    return next(action)

}