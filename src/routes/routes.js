import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomeScreen from '../screens/HomeScreen'
import EventScreen from '../screens/EventScreen'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <HomeScreen /> } />
        <Route path="/evento/:id" exact element={ <EventScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
