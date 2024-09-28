// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data) {
//     console.log(data);
// })

//-------------------------------------------------------------//

// function onDone() {
//     console.log("hi there");
// }

// setTimeout(onDone, 1000);
// console.log("after setTimeout");

//----------------------------------------------------------------//
//promisify this async function
//return undefined
// function myOwnSetTimeout(callback,duration) {
//     setTimeout(callback,duration);
// }

// myOwnSetTimeout(function() {
//     console.log("after setTimeout")
// }, 1000)

//return promise 
// async await syntax, promise chaning => callback hell
// function promisifiedMyOwnSetTimeout(duration) {
//     const p = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(); 
//         }, duration);
//     });
//     return p; 
// }

// const ans = promisifiedMyOwnSetTimeout(1000);
// ans.then(function() {
//     console.log("timeout is done 1");
// });




//-----------------------------------------------------------//

// function promisifiedMyOwnSetTimeout(duration) {
//     const p = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(); 
//         }, duration);
//     });
//     return p; 
// }

// function main() {
//     promisifiedMyOwnSetTimeout(1000).then(function() {
//         console.log("timeout is done 2");
//     })
// }

// main();

//---------------------------------------------------------------//

// function promisifiedMyOwnSetTimeout(duration) {
//     const p = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(); 
//         },duration );
//     });
//     return p; 
// }

// async function main() {
//     const value = await promisifiedMyOwnSetTimeout(1000);
//     console.log("timeout is done 3");
// }

// main();

//----------------------------------------------------------------//

