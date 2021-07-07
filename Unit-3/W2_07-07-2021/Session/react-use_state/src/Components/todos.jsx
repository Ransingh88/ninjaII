import { useState } from "react"

export function Todos() {
    const [name, setName] = useState('Unknown')
    const [todoList,setTodoList] = useState([])
    return (
        <div>
            <h1>Your name is: {name }</h1>
            <input type="text" placeholder='Enter your name' onChange={(e) => {
                console.log(e.target.value)
                setName(e.target.value)
            }} />
            <button onClick={
                () => {
                    setTodoList([...todoList,name])
                }
            }>Add Todos</button>

            <ol>
                {todoList.map(e => 
                    <li>{ e}</li>
                    )}
            </ol>
        </div>
    )
}