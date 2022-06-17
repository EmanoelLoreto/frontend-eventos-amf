import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomeScreen from '../screens/HomeScreen'
import EventScreen from '../screens/EventScreen'
import InstitucionalScreen from '../screens/InstitucionalScreen'
import ContatoScreen from '../screens/ContatoScreen'
import CreateEventScreen from '../screens/CreateEventScreen'

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
