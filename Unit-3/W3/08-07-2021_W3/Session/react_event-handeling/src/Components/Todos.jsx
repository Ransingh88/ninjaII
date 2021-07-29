import { useState } from 'react'
import { TodosInput } from './TodosInput'
import {TodosList} from './TodosList'

export function Todos() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (item) => {
        setTodos( [...todos, item] );
    };
    return(
    <>
            <TodosInput handleAddTodo = {handleAddTodo} />
            <TodosList TodosList={todos} />
    </>
    )
}