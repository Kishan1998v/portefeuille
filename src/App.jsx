import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextTrail from './elements/Text/textTrail/TextTrail'
import DarkVeil from './elements/Background/DarkVeil/DarkVeil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DarkVeil />
      </div>
    </>
  )
}

export default App
