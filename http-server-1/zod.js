// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());
/*
    {    
        email: string => email
        password: atleast 8 letters
        country: "IN", "US" 
    }
*/
// const schema = zod.object({
//     email: zod.email(),
//     password: zod.min(8),
//     country: zod.literal("IN").or(zod.literal("US"))
// })


// app.use(express.json());

// app.post("/health-checkup", (req, res) => {
//     const kidney = req.body.kidney;
//     const response = schema.safeParse(kidney);
//     if (!response.success) {
//         res.status(411).json ({
//             msg: "Input is invalid"
//         })
//     } else {
//         res.send({
//             response
//         })
//     }
// });

// app.listen(3000)


//-----------------------------------------------------//

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
    
}

app.post("/login", (req, res) => {
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "Your inoput are invalid"
        })
        return;
    }
})

app.listen(3000)