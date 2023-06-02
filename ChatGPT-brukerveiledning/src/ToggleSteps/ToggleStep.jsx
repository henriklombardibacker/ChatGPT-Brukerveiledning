import { useState } from "react";
import Completed from '../Completed'

export default function ToggleStep({}) {

    const [showFirstStep, setFirstStep] = useState(true);

    const ToggleFirstStep = () => {
      setFirstStep(!showFirstStep);
    }

    return (
      <div>
        <button className="first-step-button bg-white p-7 mt-20 w-6/12" alt="Utvid Steg 1" onClick={ToggleFirstStep}>{showFirstStep ? 'Steg 1 ⌃' : 'Steg 1 ⌄'}</button>
        {showFirstStep && <div className="steg-1 mt-32 font-light">
          <h1 className="">Steg 1</h1>
          <p className="mt-10">Først så trykker du på en ny fane ved å trykke ctrl + t i tastaturen din. Det er cmd + t i en Mac tastatur.</p>
          <Completed />
        </div>}
      </div>
    );
};