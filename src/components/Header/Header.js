import React from 'react'
import './header.css'
import { useAuth } from '../../hooks/useAuth'

const Header = ({title}) => {
  const {isLoggedIn , setIsloggedIn} = useAuth();
  return (
    <div>
      {title}
      <button onClick={() => setIsloggedIn(true)}>Login</button>
    </div>
  )
}

export default Header
