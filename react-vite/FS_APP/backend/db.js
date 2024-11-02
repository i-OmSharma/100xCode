import mongoose from 'mongoose';
import { boolean } from 'zod';
import 'dotenv/config';
/* 
Todo {
    title:string,
    description:string,
    complition: boolean
}
*/

mongoose.connect(process.env.MONGO_URL);

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completition: Boolean
})

const todo = mongoose.model('todos', TodoSchema)

export { todo }