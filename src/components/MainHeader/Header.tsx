import React from 'react'
import { Wrap, Anchor } from './styles'
import Logo from '@assets/images/happyHouseLogoWhite.svg'

// interface headerLinkProps {
//   label: string
//   path: string
// }
const headerLinks = [
  { label: 'Mission', path: '/misson' },
  { label: 'Contact us', path: '/contact-us' },
  { label: 'Team', path: '/team' },
]

const Header = () => {
  return (
    <Wrap>
      <Logo />
      {headerLinks?.map((link) => (
        <Anchor key={link.path} to={link.path}>
          {link.label}
        </Anchor>
      ))}
    </Wrap>
  )
}

export default Header
