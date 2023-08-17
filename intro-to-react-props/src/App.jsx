import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from 'src/components/Card.jsx'
import ProductPage from './components/ProductPage.jsx'

function App() {

  return (
    <>

      <div id="logo-images-lol">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Veet/Vite/Veetay + React</h1>
      {<Card/>}
      
      <ProductPage/>

      
     
    </>
  )
}

export default App


// A "refresh" is a RE-SET ; A rerender, remembers  - Sam 🙏🏾🧘🏾‍♂️🪷💫
