import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Mayor from './components/Mayor'

function App() {

  return (
    <div className='app'>
      <Header />
      <Mayor />
    </div>
  )
}

export default App
