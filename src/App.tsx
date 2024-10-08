import { useState } from 'react'
import elipse from './assets/Ellipse.svg'
import circle from './assets/Animation.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logos'>
        <img src={elipse} alt="elipse" className='logo orb' />
        <img src={circle} alt="circle" className='logo circle' />
      </div>

    </>
  )
}

export default App
