// const express = require("express");

// const app = express();

// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (!(username === "admin" && password === "admin")) {
//     res.status(400).json({ msg: "Something up with your inputs" });
//     return;
//   }
//   if (kidneyId !== "1" && kidneyId !== "2") {
//     res.status(400).json({ msg: "Something up with your inputs" });
//     return;
//   }
//   res.json({
//     msg: "Your kidney is healthy",
//   });
// });

// app.listen(3000);

//-------------------------------------------------------------//

// const express = require("express");
// const app = express();

// app.use(express.json())

// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const kidneyLenth = kidneys.length;
//   res.send("You have" + kidneyLenth + "kidneys")
// });

//global catches -->helps u to give a better error message to the user.
//Error-handling Middleware:this have 4(err, req, res, next) arguments isntad of 3,it get recognized by express it has 4 arguments. 

// app.use((err, req, res, next) => {
//   res.json({
//     msg:"Sorry soemthing up with our server"
//   })
// })

// app.listen(3000);

//------------------------------------------------------------------//

const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age  = req.query.age;
  if( age >= 14 ) {
    next();
  } else {
    res.json({
      msg: "Age limit!!!"
    })
  }
}

// app.use( isOldEnoughMiddleware );

/*this is for definig at the very top instead of defining in every express.
it trigers every route below it not above it*/

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
    res.json({
      msg: "You have succesfully riden this ride1"
    })
  })

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
    res.json({
      msg: "You have succesfully riden this ride2"
    })
})

app.listen(3000)

