import { useState } from "react"

export default function Completed({}) {

    const [completed, setCompleted] = useState('ikke fullført')

    const handleCompleted = () => {
        setCompleted('Fullført')
    }

    return(
        <div>
            <p className="text-green-800 font-bold p-10">{completed}</p>
            <button onClick={handleCompleted} className="text-green-500">✔︎</button>
        </div>
    )
}

