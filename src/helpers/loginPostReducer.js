export const INITIAL_LOGIN_FETCH_STATE = {
  loading: false,
  error: false,
  data: {}
}

export const loginPostReducer = (state, action) => {
  switch(action.type){
    case "FETCH_START":
      return{
        ...state,
        loading: true
      }
    case "FETCH_SUCCESS":
      return{
        ...state,
        loading: false,
        data: action.payload
      }
    case "FETCH_ERROR":
      return{
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}