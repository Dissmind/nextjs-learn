import {createSlice} from '@reduxjs/toolkit'


export const postsSlice = createSlice({

  name: 'post',

  initialState: {
    posts: [],
    isLoading: false,
    isFailure: false
  },

  reducers: {
    startLoading: state => {
      state.isLoading = true
    },

    finishLoading: state => {
      state.isLoading = false
    },

    fetchingPosts: (state, action) => {
      state.posts = action.payload.posts
    },

    setFailure: (state, action) => {
      state.isFailure = action.payload.isFailure
    }

  }
})


// Selectors
export const postsSelector = state => state.posts.posts
export const isLoadingSelector = state => state.posts.isLoading
export const isFailureSelector = state => state.posts.isFailure


// Async
export const fetchPosts = () => async dispatch => {
  dispatch(startLoading())

  const res = await fetch('http://localhost:3001/api/posts')
  const data = await res.json()
  console.log(data)
  dispatch(fetchingPosts({posts: data.posts}))

  dispatch(finishLoading())
}


export const {
  startLoading,
  finishLoading,
  fetchingPosts,
  setFailure
} = postsSlice.actions

export default postsSlice.reducer