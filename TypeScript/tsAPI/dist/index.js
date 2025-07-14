"use strict";
function sumOfAge(User1, User2) {
    return User1.age + User2.age;
}
function UpdateUser(id, updateData) {
    //Db calls
    console.log(`Updating user with ID: ${id}`);
    console.log(`New name: ${updateData.name}`);
    console.log(`New age: ${updateData.age}`);
    console.log(`New password: ${updateData.password}`);
}
const updatePayload = {
    name: "Amit",
    age: 30,
    password: "newPass123"
};
UpdateUser(1, updatePayload);
