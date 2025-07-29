"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
// async function insertUser(username:string, password: string, firstName: string, lastName: string, email: string) {
//     const response = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName,
//             email
//         }
//     })
//     console.log(response);
// }
// insertUser("test1","test","test","test","test@test")
async function getTodo(userId) {
    const response2 = await prisma.todos.findMany({
        where: {
            user_id: userId
        }
    });
    console.log(response2);
}
getTodo(1);
