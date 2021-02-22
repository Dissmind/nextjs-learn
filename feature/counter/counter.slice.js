import {createSlice} from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0
  },





  reducers: {
    addValue: (state, action) => {
      console.log(state)
      console.log(action)
      state.value = state.value + action.payload.value
    }
  }



})


// Selectors
export const valueSelector = state => state.counter.value


// Async
export const asyncAdd = ({value}) => dispatch => {
  setTimeout(() => {
    dispatch(addValue({value}))
  }, 1000)
}


export const { addValue } = counterSlice.actions
export default counterSlice.reducer
