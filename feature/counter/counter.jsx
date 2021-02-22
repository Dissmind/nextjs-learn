import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {addValue, asyncAdd, valueSelector} from './counter.slice'


const CounterStl = styled.div``


export const Counter = ({}) => {

  const [inputValue, setInputValue] = useState('')


  const onChangeInput = e => setInputValue(e.target.value)

  const counter = useSelector(valueSelector)

  const dispatch = useDispatch()

  const onAdd = () => {
    dispatch(addValue({value: 1}))
  }

  const onSub = () => {
    dispatch(addValue({value: -1}))
  }

  const onAddFromInput = () => {
    dispatch(addValue({value: Number(inputValue) || 0}))
  }

  const onAsyncAdd = () => {
    dispatch(asyncAdd({value: Number(inputValue) || 0}))
  }


  return (
    <CounterStl>
      <h1>Counter: {counter}</h1>

      <button
        onClick={onAdd}
      >+</button>

      <button
        onClick={onSub}
      >-</button>

      <button
        onClick={onAsyncAdd}
      >Async</button>

      <br/><br/><br/>

      <input
        type="text"
        onChange={onChangeInput}
      />

      <button
        onClick={onAddFromInput}
      >+</button>
    </CounterStl>
  )
}