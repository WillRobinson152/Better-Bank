const express   = require("express");
const app       = express();
const cors      = require("cors");
const dal       = require("./dal.js")

// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

// create user account

// original:
// app.get("/account/create/:name/:email/:password", (req, res) => {
//     res.send({
//         name:       req.params.name,
//         email:      req.params.email,
//         password:   req.params.password
//     });
// });

// with DAL:
app.get("/account/create/:name/:email/:password", (req, res) => {
    //else create user
    dal.create(req.params.name,
               req.params.email,
               req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        })
});

//set current
app.get("/account/current/:name/:email/:password", (req, res) => {
    //else create user
    dal.setCurrent(req.params.name,
                   req.params.email,
                   req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        })
});

//get current
app.get("/account/currentuser", (req, res) => {
    dal.getCurrent().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

app.get("/account/currentuser/findone/:email/:password", (req, res) => {
    dal.findOne(req.params.email, req.params.password). 
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

//deposit
app.get("/account/deposit/:email/:amount", (req, res) => {
    dal.update(req.params.email,
               Number(req.params.amount)).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

//withdraw
app.get("/account/withdraw/:email/:amount", (req, res) => {
    dal.update(req.params.email,
               -1*Number(req.params.amount)).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// login user
// app.get("/account/login/:email/:password", (req, res) => {
//     res.send({
//         email:      req.params.email,
//         password:   req.params.password
//     });
// });
app.get("/account/login/:email/:password", (req, res) => {
    dal.login(req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        })
})

app.get("/account/balance/:email", (req, res) => {
    dal.findOne(req.params.email). 
        then((user) => {
            console.log(user);
            res.send(user);
        });
})

// all accounts

// original:
// app.get("/account/all", (req, res) => {
//     res.send({
//         name:       "peter",
//         email:      "peter@mit.edu",
//         password:   "secret"
//     });
// });

// with DAL:
app.get("/account/all", (req, res) => {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});



const port = 3000;
app.listen(port);
console.log('Running on port ' + port);