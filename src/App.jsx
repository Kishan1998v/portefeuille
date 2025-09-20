import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkVeil from './elements/Background/DarkVeil/DarkVeil'
import HeroSection from './pages/herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '100%', height: '80vh', position: 'fixed' }}>
        <DarkVeil />
      </div>
      <HeroSection/>
    </>
  )
}

export default App
