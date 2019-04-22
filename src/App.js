import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import './App.css'

import GameBoard from './pages/game'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={GameBoard}/>
      </BrowserRouter>
    )
  }
}

export default App
