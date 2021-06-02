
import produce from "immer";
import execHandler from "../../leasson 5/redux/reducers/reducerUtils";

const initialState = {
    name: "",
    age: ""
};


const loginData = {
    
    setName(state, action){
        state.name= action.payload;
    },

    setAge(state, action){
        state.age= action.payload;
    }
}

export default produce ((state, action) => {
    execHandler(state, action, loginData);
  }, initialState)