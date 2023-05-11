import { useState } from "react"

export default function Completed({}) {

    const [completed, setCompleted] = useState('ikke fullført')

    const handleCompleted = () => {
        setCompleted('Fullført')
    }

    const handleNotCompleted = () => {
        setCompleted('Ikke fullført')
    }

    return(
        <div>
            <p className="text-black-800 font-bold p-10">{completed}</p>
            <button onClick={handleCompleted} className="text-green-500 m-5">✓</button>
            <button onClick={handleNotCompleted} className="text-red-500 m-5">✕</button>
        </div>
    )
}

