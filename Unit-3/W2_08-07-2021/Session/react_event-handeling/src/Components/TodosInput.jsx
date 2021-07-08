import { useState } from "react"
import { v4 as uuid } from 'uuid';

export function TodosInput({handleAddTodo}) {
    const [text,setText] = useState('')
    return (
        <div>
            <input type="text" placeholder='Enter someting'
                value={ text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                const payload = {
                    id: uuid(),
                    title: text,
                    status: false
                };
                handleAddTodo(payload)
                setText('')
            }}>Add Todo</button>
        </div>
    )
}