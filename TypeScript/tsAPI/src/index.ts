//interface
interface user {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

function sumOfAge(User1: user, User2: user) {
  return User1.age + User2.age;
}

// const age = sumOfAge({age: 30}, {age: 21})
// console.log(age);

//Pick
type Updateprops = Pick<user, "name" | "age" | "password">;

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
  password: "newPass123",
};

UpdateUser(1, updatePayload);

//partial
interface user2 {
  id: number;
  name: string;
  age?: number;
  email?: string; //partial
  password: string;
}

//Readonly
type user3 = {
  // readonly id: number,
  name: string;
  age?: number;
  email?: string; //partial
  password?: string;
};

// or

const obj: Readonly<user3> = {
  name: "john",
  age: 21,
};

// obj.age = 12

//Object  --> Records and Maps

// type User = {
//     id: number,
//     username: string
// }

// type Users = {
//     [key: string]: User
// }

// const users: Users = {
//     "ras@1": {
//         id: 1,
//         username: "rashid"
//     },
//     "ahm@2": {
//         id: 2,
//         username: "admad"
//     }
// }

//Records

type User = {
  id: number;
  username: string;
};

type Users = Record<string, User>;

const users: Users = {
  "ras@1": {
    id: 1,
    username: "rashid",
  },
  "ahm@2": {
    id: 2,
    username: "admad",
  },
};

//Map
type usr = {
  id: number;
  name: string;
};

const users1 = new Map<string, usr>();
users1.set("ras@1", { id: 1, name: "Rashid" });
users1.set("ahm@2", { id: 2, name: "ahmad" });

const usrs = users1.get("ras@1");
console.log(usrs);

//Exclude

type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<EventType,'scroll' >

const handleEvent = (event: ExcludeEvent) => {
    console.log(`handling event: ${event}`); 
}

handleEvent('click') //Ok
// handleEvent('scroll') //NotOK