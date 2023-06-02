import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './Introduction'
import ToggleStep from './ToggleSteps/ToggleStep'
import ToggleSecondStep from './ToggleSteps/ToggleSecondStep'
import Warning from './Warning'

function App() {

  return (
    <div className="App text-black">
      <header alt="Introduksjon til nettsiden">

        <Introduction/>

      </header>
        <main alt="Selve brukerveiledningen">

          <ToggleStep/>
          <ToggleSecondStep/>

        </main>

        <footer alt="Viktig informasjon om denne veiledningen">
          <div className='mt-20'>

            <Warning/>

          </div>
        </footer>
    </div>
  )
}

export default App
