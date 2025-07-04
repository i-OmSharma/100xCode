import { log } from "console";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()


async function insertUser(email: string, password: string, firstName: string , lastName: string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res); 
}

// insertUser("com@example.com", "pass", "asdasd", "dsadsa")


interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res2 = await prisma.user.update({
        where: {email},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res2);
    
}

// updateUser("com@example.com", {
//     firstName: "asdas",
//     lastName: "qweqwe"
// }).then(() => {
//     console.log("user Updated");
// })


async function deleteUser(email:string) {
    const res3 = await prisma.user.delete({
        where:{email}
    })
    console.log(res3);
}

// deleteUser("com@example.com").then(()=> {
//     console.log("User deleted");
// })

async function showUser() {
    const res4 = await prisma.user.findMany()
    console.log(res4);
}
showUser();