import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const PostItemStl = styled.li``

export const PostItem = ({title, id}) => {
  return (
    <PostItemStl>

      <Link href={`/post/${id}`}>
        <a>
          {title}
        </a>
      </Link>

    </PostItemStl>
  )
}