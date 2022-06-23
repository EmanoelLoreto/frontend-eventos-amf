import React, { useState, useEffect, createContext } from 'react'
// eslint-disable-next-line import/no-cycle
import LoginContainer from '../../containers/LoginContainer/LoginContainer'
import { useNavigate } from 'react-router-dom'

const LoginScreen = (props) => <LoginContainer { ...props } />

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  }, [])

  const login = (userLogin, password) => {

    console.log('login auth', { userLogin, password })

    const loggedUser = {
      id: '123',
      userLogin,
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    if (userLogin === 'vitor' && password === 'secret') {
      setUser(loggedUser)
      navigate('/evento-admin')
    }
  }
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={ {
      authenticated: !!user, user, loading, login, logout
    } }
    >
      { children }
    </AuthContext.Provider>
  )
}

export default LoginScreen
