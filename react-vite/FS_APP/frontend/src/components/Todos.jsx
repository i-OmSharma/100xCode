/*
    todos = [
    {
    title: "go to gym",
    description: "gym time 7-9"
    }
    ]
*/




export function Todos({todos}) { //or object destructuring {{todos}}
    // const todos = props.todos

    return <div>
         {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completion == true ? "Completion" : "Mark as Completed"}</button>
            </div>
         })}
    </div>    
}   