import { useState } from "react"

export default function ImportantNote({}) {


    return(
        <div className="flex flex-col text-center">
        <h1>Viktig Informasjon!</h1>
        <p className="mt-5">Huk av punktene under sånn at du viser at du forstår dem</p>

        <ul className="text-left mt-10">
            <li>
                <input type="checkbox" className="viktig-informasjon mt-10" alt="Huk av at du forstår dette."></input>
                <label for="viktig-informasjon" className="ml-10">
                Når du bruker ChatGPT vær oppmerksom på at du ikke skal dele sensitiv informasjon med ChatGPT siden Open AI ser dette.
                </label>
            </li>

            <li>               
                <input type="checkbox" className="viktig-informasjon2 mt-10" alt="Huk av at du forstår dette."></input>
                <label for="viktig-informasjon" className="ml-10">
                Bruk ChatGPT med fornuft og gode hendsikter. Ikke bruk ChatGPT til å gjennomføre handlinger som skader andre eller bryter lover.
                </label>
            </li>

            <li>
                <input type="checkbox" className="viktig-informasjon3 mt-10" alt="Huk av at du forstår dette."></input>
                <label for="viktig-informasjon" className="ml-10">
                Ikke stol på alt ChatGPT sier og husk å gjøre forskning på den informasjonen du blir gitt. Ikke stol på all informasjon du finner på internett.
                </label>
            </li>
        </ul>

        </div>
    );
};