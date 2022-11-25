import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import authReducer from './authSlice'
import tasksReducer from './tasksSlice'
import fetchTasksReducer from './fetchTasksSlice'
import mobileNavReducer from './mobileNavSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    mobileNav: mobileNavReducer,
    tasks: tasksReducer,
    fetchTasks: fetchTasksReducer
  }
});