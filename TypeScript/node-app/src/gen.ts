// Generics are a language independent concept 

function identity<T>(arg: T) { // here T can be of any type T is identifyed later
    return arg;
}

let Output1 = identity<string>("Om")
let Output2 = identity<number>(21)

console.log(Output1.toUpperCase());
console.log(Output2);


function getFirstelement<T>(arr: T[]) {
    return arr[0]
}

const el = getFirstelement<string>(["Om", "hello"]) // <string>  not necessay it to be like strickly number or premitive data type it can  be any complex 
console.log(el.toUpperCase());

