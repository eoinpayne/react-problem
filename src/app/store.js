import { configureStore } from '@reduxjs/toolkit'
import esppReducer from '../features/espp/esppSlice'
// import postsReducer from '../features/posts/postsSlice'
// import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    espp: esppReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
  }
})