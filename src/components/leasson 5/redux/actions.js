
// export function addPupil(newPupil) {

//     return{ type: "ADD_NEW_PUPIL", payLoad: newPupil}
// }

// export function deletePupil(id) {
    
//     return{ type: "DELETE_PUPIL", payLoad: id}
// }

// export function updatePupil(newPupil) {
    
//     return{ type: "UPDATE_PUPIL", payLoad: newPupil}
// }

function convertActionName(actionName){
    return actionName.replace(/([A-Z])/g, "_$1"). toUpperCase();
}

const actions = new Proxy(
    {},
    {
        get: function(target, prop){
            if(target[prop]== undefined)
            return function(args){
                return {type: convertActionName(prop), payLoad: args}
            }
            else
            return target[prop];
        }
    }
)

export default actions;

// export default {addPupil, deletePupil, updatePupil};

