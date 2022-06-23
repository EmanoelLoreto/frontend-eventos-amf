/* eslint-disable react/no-unstable-nested-components */
import React, { lazy, useContext } from 'react'
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom'
import { AuthProvider, AuthContext } from '../screens/LoginScreen'

const HomeScreen = lazy(() => import('../screens/HomeScreen'))
const EventScreen = lazy(() => import('../screens/EventScreen'))
const InstitucionalScreen = lazy(() => import('../screens/InstitucionalScreen'))
const ContatoScreen = lazy(() => import('../screens/ContatoScreen'))
const LoginScreen = lazy(() => import('../screens/LoginScreen'))
const EventAdminScreen = lazy(() => import('../screens/EventAdminScreen'))
const CreateEventScreen = lazy(() => import('../screens/CreateEventScreen'))
const EditEventScreen = lazy(() => import('../screens/EditEventScreen'))

const Router = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      return <div>Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={ <HomeScreen /> } />
          <Route path="/evento/:id" exact element={ <EventScreen /> } />
          <Route path="/institucional" exact element={ <InstitucionalScreen /> } />
          <Route path="/contato" exact element={ <ContatoScreen /> } />
          <Route path="/login" exact element={ <LoginScreen /> } />
          <Route path="/evento-admin" exact element={ <Private><EventAdminScreen /></Private> } />
          <Route path="/criar-evento" exact element={ <Private><CreateEventScreen /></Private> } />
          <Route path="/editar-evento" exact element={ <Private><EditEventScreen /></Private> } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Router
