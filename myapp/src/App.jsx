import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path='/l' element={<Login />} />
          <Route path='/s' element={<Signup />} />
          <Route path='/a' element={<Statebasics />} />
          <Route path='/c' element={<Counter />} />
          <Route path='/b' element={<Api />} />
          <Route path='/p' element={<Pokemon />} />
        </Routes>
        
      </div>

    </>
  )
}

export default App
