import mongoose from 'mongoose';
import { boolean } from 'zod';
/* 
Todo {
    title:string,
    description:string,
    complition: boolean
}
*/

mongoose.connect("mongodb+srv://admin:admin999@cluster0.cs07b.mongodb.net/toDo");

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completition: Boolean
})

const todo = mongoose.model('todos', TodoSchema)

export { todo }