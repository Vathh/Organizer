import { createSlice } from '@reduxjs/toolkit'

export const jobsSlice = createSlice({
  name: "jobs",
  initialState:{    
    jobs: {}   
  },
  reducers:{
    updateJobs: (state, action) => {
      state.jobs = action.payload.jobs;
    }
  }
})

export const { updateJobs } = jobsSlice.actions;
export default jobsSlice.reducer;