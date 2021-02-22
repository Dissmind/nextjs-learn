import {combineReducers, configureStore} from '@reduxjs/toolkit'

// import {postReducer} from './post.slice'
import counterReducer from './feature/counter/counter.slice'

export default configureStore({
  reducer: {
    // post: postReducer,
    counter: counterReducer
  }
})


// export default combineReducers({
//   post: postReducer,
//   counter: counterReducer
// })