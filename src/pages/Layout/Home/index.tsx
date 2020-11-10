import localStorageService from '@utils/localStorage'
import React from 'react'
import { useHistory } from 'react-router'
import Header from '@components/MainHeader/Header'

function HomePage() {
  const history = useHistory()

  function logout() {
    localStorageService.token = null
    history.replace('/')
  }
  return (
    <div>
      <Header />
      HomePage <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage
