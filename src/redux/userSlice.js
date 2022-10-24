import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",
  initialState:{    
    name: "",
    jwtKey: ""    
  },
  reducers:{
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.jwtKey = action.payload.jwtKey;
    }
  }
})

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;