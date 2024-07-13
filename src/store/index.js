import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/auth.slice'

const store = configureStore({
  reducer: {
    user: userSlice
  }
})

export default store