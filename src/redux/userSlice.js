import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",
  initialState:{    
    name: "",
    jwtKey: ""    
  },
  reducers:{
    updateUser: (state, action) => {
      state.userInfo = action.payload
    }
  }
})

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;