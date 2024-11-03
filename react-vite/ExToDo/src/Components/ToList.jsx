import { Todo } from "./Todo"
import { useState } from "react"

let counter = 4;

export const ToList = () => {
    const [todo, setTodo] = useState([{
        id: 1,
        title: "Sleep for 6 hrs",
        description: "You have to sleep for 6 hrs to 8 hrs"
    }, {
        id: 2,
        title: "Wakeup at 6",
        description: "You have to wakeup at 6"
    }, {
        id: 3,
        title: "eat food ",
        description: "You have to eat food"
    }])


    const onButtonClick = () => {
        setTodo([...todo, {
            id: counter++,
            title: Math.random(),
            description: `The description is ${Math.random()}`
        }])
    }


    return( <div>
            <button onClick={onButtonClick}>Add a ToDo</button>
            {todo.map(todo => <Todo key={todo.id} title={todo.title } description={todo.description} />)}    
        </div>
    )
}

