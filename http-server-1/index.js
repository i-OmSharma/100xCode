// const express = require("express");
 
// const port = 3000

// const app = express();


// // req, res => request and response
// app.get('/', (req, res) => {
//     res.send("hello world")
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);  
// })

//---------------------------------------------------------------//

const express = require("express");
const app = express();

const user = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

// for get request we use querry paramters
//check no of kidneys
app.get("/",(req, res) => {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    // console.log(johnKidneys);
    
})

//add kidneys
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
}) 
//adds healthy kidneys
app.put("/", (req, res) => {
    for (let i = 0; i < user[0].kidneys.length; i++) {
            user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//remove unhealthy kidneys
app.delete("/", (req, res) => {
    if (isThereAtLeastOneUnhealthyKIdney()) {
        const newKidneys = [];
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg: "Done"})
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtLeastOneUnhealthyKIdney () {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
            }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(3000);