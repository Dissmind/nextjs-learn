import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import Link from 'next/link'
import {
  fetchingPosts,
  fetchPosts,
  finishLoading,
  isFailureSelector,
  isLoadingSelector,
  postsSelector,
  startLoading
} from './posts.slice'
import {PostItem} from './posts-item'

const PostsListStl = styled.ul``


export const PostsList = ({}) => {

  const posts = useSelector(postsSelector)
  const isLoading = useSelector(isLoadingSelector)
  const isFailure = useSelector(isFailureSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])


  return (
    <PostsListStl>
      {
        (isLoading)
          ? <h1>Loading...</h1>
          : posts.map(i => <PostItem title={i.title} id={i.id} />)
      }
    </PostsListStl>
  )
}


