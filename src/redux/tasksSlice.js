import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: "tasks",
  initialState:{    
    jobs: {},
    services: {},
    orders: {}   
  },
  reducers:{
    updateJobs: (state, action) => {
      state.jobs = action.payload.jobs;      
    },
    updateServices: (state, action) => {
      state.services = action.payload.services;      
    },
    updateOrders: (state, action) => {
      state.orders = action.payload.orders;      
    },
  }
})

export const { updateJobs, updateServices, updateOrders } = tasksSlice.actions;
export default tasksSlice.reducer;