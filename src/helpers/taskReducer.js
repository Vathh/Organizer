export const ADD_TASK_FORM_STATE = {
  priority : 1,
  description : "",
  place : "",
  object : "",
  additionalInfo : ""
};

export const taskReducer = (state, action) => {
  switch(action.type){
    case "CHANGE_INPUT":
      return{
        ...state,
        [action.payload.name]:action.payload.value
      }
    default:
      return state;
  }
}