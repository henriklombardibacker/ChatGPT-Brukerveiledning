import { useState } from "react"

export default function Completed({}) {

    const [notcompleted, setNotcompleted] = useState('')
    const [completed, setCompleted] = useState('')

    const handleNotcompleted = () => {
        setNotcompleted('Ikke fullført')
    }

    const handleCompleted = () => {
        setCompleted('Fullført')
    }

    return(
        <div>
            <p className="text-red-800 font-bold p-10">{notcompleted}</p>
            <p className="text-green-800 font-bold p-10">{completed}</p>
            <button onClick={handleNotcompleted} className="text-red-500">✔︎</button>
            <button onClick={handleCompleted} className="text-green-500">✔︎</button>
        </div>
    )
}

