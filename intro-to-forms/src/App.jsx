import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import MostFormInputs from './Components/MostFormInputs.jsx'
import FormCheckBoxExamples from './Components/FormCheckBoxExamples.jsx'


function App() {
  const[isCheckedA, setIsCheckedA] = useState(false)
  const[isCheckedB, setIsCheckedB] = useState(false)
  const[isCheckedC, setIsCheckedC] = useState(false)


  return (
    <>
      <div id='logoz'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Intro to React Forms</h1>

      {/* Checkbox */}
      

      {/* Dropdown */}
      <form>
        <select>
          <option></option>
        </select>
      </form>

      {/* Single Input */}


      {/* Multi Input */}

      {/* Multi Input - 1 State */}


      {/* <MostFormInputs /> */}

    </>
  )
}

export default App