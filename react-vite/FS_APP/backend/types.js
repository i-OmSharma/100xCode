import { z } from "zod";

/*
    {
        title; string,
        description: string
    }

    {
        id: string
    }
*/

const createTodo = z.object({
    title: z.string(),
    description: z.string()
})

const updateTodo = z.object({
    id: z.string(),
})

export { createTodo, updateTodo };

