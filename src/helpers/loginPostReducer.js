export const INITIAL_LOGIN_STATE = {
  loading: false,
  error: false,
  post: {}
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
        post: action.payload
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