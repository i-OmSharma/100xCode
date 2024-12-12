import axios from "axios"
import { useEffect, useState } from "react"

function App() {

    const[countId, setCountId] = useState(1)

    return <div>
        <button onClick={() => setCountId(1)}>1</button>
        <button onClick={() => setCountId(2)}>2</button>
        <button onClick={() => setCountId(3)}>3</button>
        <button onClick={() => setCountId(4)}>4</button>
        <Todo id={countId} />
    </div>
}

function Todo({id}) {
    const [todo, setTodos] = useState({})

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(response => {
            setTodos(response.data.todo)
        })
    }, [id]) // if id rerender it will change

    return <div>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </div>
}

export default App; 