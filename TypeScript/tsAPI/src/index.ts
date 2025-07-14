interface user{
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}

function sumOfAge(User1: user, User2: user) {
    return User1.age+User2.age
}

// const age = sumOfAge({age: 30}, {age: 21})
// console.log(age);

type Updateprops = Pick<user, 'name' | 'age' | 'password'> 

function UpdateUser(id: number, updateData: Updateprops) {
    //Db calls
    console.log(`Updating user with ID: ${id}`);
    console.log(`New name: ${updateData.name}`);
    console.log(`New age: ${updateData.age}`);
    console.log(`New password: ${updateData.password}`);
}

const updatePayload: Updateprops = {
    name: "Amit",
    age: 30,
    password: "newPass123"
};

UpdateUser(1, updatePayload);