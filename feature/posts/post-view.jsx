import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts, postsSelector} from './posts.slice'



const PostViewStl = styled.div``


export const PostView = ({id}) => {

  const posts = useSelector(postsSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const post = posts.find(i => i.id == id)
  // TODO: [FIX bug]: preload -> post = undefined (async fetch)
  const {title, body} = post


  return (
    <PostViewStl>
      Post view
      <h1>{title}</h1>

      <br/>

      <p>{body}</p>
    </PostViewStl>
  )
}