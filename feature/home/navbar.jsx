import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavbarStl = styled.nav``

const LinkListStl = styled.ul`
  display: flex;
`

const LinkStl = styled.li`
  list-style: none;
`




export const Navbar = ({}) => {

  const links = [
    {title: 'Home', href: '/'},
    {title: 'Posts', href: '/posts'},
    {title: 'Counter', href: '/counter'}
  ]


  return (
    <NavbarStl>
      <LinkListStl>
        {
          links.map(i => <LinkStl>
            <Link href={i.href}>
              <a>{i.title}</a>
            </Link>
          </LinkStl>)
        }
      </LinkListStl>
    </NavbarStl>
  )
}