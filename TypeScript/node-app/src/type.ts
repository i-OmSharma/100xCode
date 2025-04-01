type User1 = {
    firstName: string,
    lastName: string,
    agr: number
}
//types u cant use to implement classes, only interface is ment for that.
//almost the same for most of the cases.
//Both let u do aggrigate the data.

interface User2 {
    firstName: string,
    lastName: string,
    agr: number  
}


//difference between Union and interfaces
//Union
type greetArg = number | string

function meet(id: greetArg) {
    console.log(id);
}

meet(1)
meet("hello")

//Intersection
type Employee = {
    name: string,
    startDate: Date
}

type Manager = {
    name: string,
    department: string
}

type teamLead = Employee & Manager;

const t: teamLead = {
    name: "Om",
    startDate: new Date(),
    department: "asdasd"
}

console.log(t);
