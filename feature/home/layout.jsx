import React from 'react'
import styled from 'styled-components'
import {Navbar} from './navbar'


const LayoutStl = styled.div`
  
`

export const Layout = ({children}) => {




  return (
    <LayoutStl>
      <Navbar />
      <main>
        {children}
      </main>
    </LayoutStl>
  )
}