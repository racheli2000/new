
import produce from "immer";
import execHandler from "./reducerUtils";


const initialState = {
  Allpupils: [
    { name: "racheli", id: "123" },
    { name: "sari", id: "456" },
    { name: "yael", id: "789" },
  ],
};

// export default produce((state, action) => {

//   switch (action.type) {
//     case "ADD_NEW_PUPIL":
//       {
//         state.Allpupils.push(action.payLoad);
//       }
//       break;

//     case "DELETE_PUPIL":
//       {
//         state.Allpupils = state.Allpupils.filter((i) => i.id !== action.payLoad.id);
//       }
//       break;

//     case "UPDATE_PUPIL":
//         // {state.Allpupils.forEach(element => {
//         //     if(element.id== action.payLoad.id)
//         //     {
//         //         debugger
//         //         element.name=action.payLoad.newName;
//         //     }
//         // });}
//         {state.Allpupils[action.payLoad.index].name=action.payLoad.newName}
//         break;
//   }
// }, initialState);


const pupils = {

  addPupil(state, action){
    debugger
    state.Allpupils.push(action.payLoad);
  },

  updatePupil(state, action) {
    state.Allpupils[action.payLoad.index].name=action.payLoad.newName;
  },

  deletePupil(state, action) {
    state.Allpupils = state.Allpupils.filter((i) => i.id !== action.payLoad.id);
  }

}

export default produce ((state, action) => {
  execHandler(state, action, pupils);
}, initialState)
