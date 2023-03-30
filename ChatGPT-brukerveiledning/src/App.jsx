import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Completed from './Completed'

function App() {

  return (
    <div className="App text-black">
      <header alt="Introduksjon til nettsiden">
        <div className="mt-10">

          <h1 className="font-extrabold p-10 top-px border-8 border-green-700">ChatGPT brukerveiledning</h1>

            <h2 className="velkommen mt-10 font-bold text-3xl">Velkommen til denne ChatGPT brukerveiledningen!</h2>

              <p className="introduksjon mt-10 max-w-3xl text-black">Dette er en veiledning for gamle folk som har lyst til å lære seg mer om internett men ikke føler at de klarer det. 
              Slik er ChatGPT et fantastisk nytt redskap laget av selskapet Open AI som er markedsledere i kunstig intelligens. 
              ChatGPT er et kunstig intelligens redskap som hjelper deg med hva som helst spørsmål du ville hatt om internett.
              Du må bare skrive inn et spørsmål så gir den deg et svar i stor detalj. </p>

            <p className="mt-10 font-bold">Huk av tommel-opp-knappen når du har forstått og gjennomført et steg i brukerveiledningen. </p>

        </div>
      </header>
        <main alt="Selve brukerveiledningen">
          
          <div className="mt-32 font-light">

            <h1 className="">Steg 1</h1>

              <p className="steg-1 mt-10">Først så trykker du på en ny fane ved å trykke ctrl + t i tastaturen din. Det er cmd + t i en Mac tastatur.</p>
              <Completed />

          </div>

        </main>
    </div>
  )
}

export default App
