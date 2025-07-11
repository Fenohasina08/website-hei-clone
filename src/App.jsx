import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admission from './Admission'
import Programmes from './Programme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Admission />
     <Programmes />
    </>
  )
}

export default App
