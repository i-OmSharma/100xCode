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
// or
const obj = {
    name: "john",
    age: 21
};
const users = {
    "ras@1": {
        id: 1,
        username: "rashid"
    },
    "ahm@2": {
        id: 2,
        username: "admad"
    }
};
const users1 = new Map();
users1.set("ras@1", { id: 1, name: "Rashid" });
users1.set("ahm@2", { id: 2, name: "ahmad" });
const usrs = users1.get("ras@1");
console.log(usrs);
