import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingComponent from './components/GreetingComponent'
import BigCatsComponent from './components/BigCatsComponent'
import EmojiComponent from './components/EmojiComponent'
import Calculator from './components/CalculatorComponent'
import BitcoinRates from './components/BitcoinRatesComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Module 6 Exercises</h2>

      <div style={{ border: '5px solid red', borderRadius: '10px', padding: '10px', margin: '10px' }}>
        {/* <GreetingComponent greetingName="Uncle Bob"></GreetingComponent> */}
        <GreetingComponent>
          Uncle Bob
        </GreetingComponent>
      </div>    
      
      <div style={{ border: '5px solid orange', borderRadius: '10px', padding: '10px', margin: '10px' }}>
        <BigCatsComponent></BigCatsComponent>
      </div>

      <div style={{ border: '5px solid yellow', borderRadius: '10px', padding: '10px', margin: '10px' }}>
        <EmojiComponent></EmojiComponent>
      </div>

      <div style={{ border: '5px solid purple', borderRadius: '10px', padding: '10px', margin: '10px' }}>
        <Calculator></Calculator>
      </div>

      <h2>Module 7 Exercises</h2>

      <div style={{ border: '5px double red', borderRadius: '10px', padding: '10px', margin: '10px' }}>
      <div style={{ border: '5px double orange', borderRadius: '10px', padding: '10px', margin: '10px' }}>
        <BitcoinRates></BitcoinRates>
      </div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
