import { createSlice } from "@reduxjs/toolkit";

export const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState:{
    navVisible: false,
  },
  reducers:{
    changeNavVisibility: (state) => {
      state.navVisible = !state.navVisible;
    }  
  }
})

export const { changeNavVisibility } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;