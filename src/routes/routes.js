import React, { lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const HomeScreen = lazy(() => import('../screens/HomeScreen'))
const EventScreen = lazy(() => import('../screens/EventScreen'))
const InstitucionalScreen = lazy(() => import('../screens/InstitucionalScreen'))
const ContatoScreen = lazy(() => import('../screens/ContatoScreen'))
const CreateEventScreen = lazy(() => import('../screens/CreateEventScreen'))

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <HomeScreen /> } />
        <Route path="/evento/:id" exact element={ <EventScreen /> } />
        <Route path="/institucional" exact element={ <InstitucionalScreen /> } />
        <Route path="/institucional" exact element={ <InstitucionalScreen /> } />
        <Route path="/contato" exact element={ <ContatoScreen /> } />
        <Route path="/criar-evento" exact element={ <CreateEventScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
