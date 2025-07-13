import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admission from './Admission'
import Programmes from './Programme'
import Propos from './Propos'
import Equipe from './Equipe'
import Debouches from './Débouchés'
import Domaines from './Domaines'
import Navbar from './Navbar'
import Hero from './Hero'
import Techno from './Techno'
import ProgrammesPhotos from './ProgrammesPhotos'
import Partenaires from './Partenaires'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Propos />
    <Equipe />
    <Debouches />
    <Domaines />
     <Admission />
     <Programmes />
     <ProgrammesPhotos />
     <Techno />
     <Partenaires />
     <Footer />
    </>
  )
}

export default App
