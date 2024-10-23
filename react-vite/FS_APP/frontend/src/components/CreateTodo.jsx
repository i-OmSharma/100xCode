import { useState } from "react"

export function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input id = "title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={ (e) => {
            const value =e.target.value;
            setTitle(e.target.value)
        }}/><br /><br />

        <input id = "description" style={{
            padding: 10,
            margin: 10
        }} 
        type="text" placeholder="desrition" onChange={ (e) => {
            const value =e.target.value;
            setDescription(e.target.value)
        }} /><br /><br />
         
        <button style={{
            padding:5,
            margin: 10
        }} onClick={() =>  {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title:  title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json "
                }
            })
            .then(async (res) => {
                const json = await res.json();
                alert("todo Added")
            })
        }}>Add a ToDo </button>
    </div>
}