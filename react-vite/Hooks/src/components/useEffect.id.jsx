import axios from "axios"
import { useEffect, useState } from "react"

function App() {
    return <div>
        <Todo id={1} />
    </div>
}

function Todo({id}) {
    const [todo, setTodo] = useState({})

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(response => {
            setTodos(response.data.todo)
        })
    }, [])

    return <dir>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </dir>
}

export default App; 