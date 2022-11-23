import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import authReducer from './authSlice'
import jobsReducer from './jobsSlice'
import mobileNavReducer from './mobileNavSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    mobileNav: mobileNavReducer,
    jobs: jobsReducer
  }
});