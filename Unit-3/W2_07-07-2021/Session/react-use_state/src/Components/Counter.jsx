import { useState } from "react"

export function Counter({ counter }) {
    const [name,setName] = useState('masai')
    return (
        <div>
            <h1>Counter is : {counter} {name}</h1>
            <button onClick={() => {
                setName('MasaiSchool')
            }}>Chane name</button>
        </div>
    )
}