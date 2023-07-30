import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './posts'


export const store = configureStore({
  reducer: {
    posts: postsSlice
  },
})