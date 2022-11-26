import { REQUEST_TYPES } from "./actionTypes"

export const INITIAL_FETCH_TASKS_STATE = {
  loading: false,
  success: false,
  error: false
}

export const fetchTasksReducer = (state, action) => {
  switch(action.type){
    case REQUEST_TYPES.START:
      return{
        ...state,
        loading: true
      }
    case REQUEST_TYPES.SUCCESS:
      return{
        ...state,
        loading: false,
        success: true
      }
    case REQUEST_TYPES.ERROR:
      return{
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}