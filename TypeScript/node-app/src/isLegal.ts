// function isLegal(age: number): boolean {
//     if (age > 18) {
//         return true
//     } else {
//         return false
//     }
// }

interface User {
    firstName: string,
    lastName: string,
    age: number
}

function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true
    } else {
        return false
    }
}

console.log(isLegal({
    firstName: "Om",
    lastName: "Om",
    age: 21
}));


