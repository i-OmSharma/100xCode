"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function insertUser(email, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    });
    console.log(res);
}
async function updateUser(email, { firstName, lastName }) {
    const res2 = await prisma.user.update({
        where: { email },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res2);
}
// updateUser("com@example.com", {
//     firstName: "asdas",
//     lastName: "qweqwe"
// }).then(() => {
//     console.log("user Updated");
// })
async function deleteUser(email) {
    const res3 = await prisma.user.delete({
        where: { email }
    });
    console.log(res3);
}
// deleteUser("com@example.com").then(()=> {
//     console.log("User deleted");
// })
async function showUser() {
    const res4 = await prisma.user.findMany();
    console.log(res4);
}
showUser();
