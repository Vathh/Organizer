import { createSlice } from '@reduxjs/toolkit'


export const fetchTasksSlice = createSlice({
  name: "fetchTasks",
  initialState:{    
    pending: false,
    error: false,
    confirmed: false
  },
  reducers:{
    fetchStart: (state, action) => {
      state.pending = true;  
    },
    fetchSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.confirmed = true;    
    },
    fetchError: (state, action) => {
      state.pending = false;
      state.error = true;   
    },
  }
})

export const { fetchStart, fetchSuccess, fetchError } = fetchTasksSlice.actions;
export default fetchTasksSlice.reducer;