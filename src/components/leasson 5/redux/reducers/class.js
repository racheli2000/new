
import produce from "immer";

const initialState = {
  classGrade: 5,
};

export default produce((state, action) => {

  switch (action.type) {
    case "CHANGE_CLASS":
      {
        state.classGrade = action.payload;
      }
      break;
  }
}, initialState);
