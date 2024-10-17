// Import Necessary Functions and Files
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'

// Configure the Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

// Export the Store
export default store
