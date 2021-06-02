
import produce from "immer";
import execHandler from "../leasson 5/redux/reducers/reducerUtils";

const initialState = {
    id: "",
    name: ""
};


const swapiData = {

    setName(state, action){
        state.name= action.payLoad.name;
    },
    
    setId(state,action){
        state.id= action.id;
    }

}

export default produce ((state, action) => {
    execHandler(state, action, swapiData);
  }, initialState)

