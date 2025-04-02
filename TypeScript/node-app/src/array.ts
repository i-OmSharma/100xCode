//adding am [] notation.
// type numberArr = number[] another method

function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(maxValue([1, 2, 3]));


interface User {
    firstName: string,
    lastName: string,
    age: number
}

function filterVote(users: User[]) {
    return users.filter(x => x.age >= 18)
}

console.log( filterVote([{
    firstName: "Om",
    lastName: "Hello",
    age: 12
}, {
    firstName: "Rama",
    lastName: "Ira",
    age: 21
}]));
