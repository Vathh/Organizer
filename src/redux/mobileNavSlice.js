import { createSlice } from "@reduxjs/toolkit";

export const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState:{
    navVisible: false,
  },
  reducers:{
    changeNavVisibility: (state) => {
      state.navVisible = !state.navVisible;
    },
    setNavVisibility: (state, action) => {
      state.navVisible = action.payload.isVisible;
    }  
  }
})

export const { changeNavVisibility, setNavVisibility } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;