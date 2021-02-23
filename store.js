import {combineReducers, configureStore} from '@reduxjs/toolkit'

import counterReducer from './feature/counter/counter.slice'
import postsReducer from './feature/posts/posts.slice'


export default configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer
  }
})