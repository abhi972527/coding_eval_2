const express = require("express");
// console.log(express);


const users = require("./MOCK_DATA.json");
// console.log(users);




const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send({ users });
});


app.get("/:work_from_home", (req, res) => {
    const newUsers = users.filter((user) => user.work_from_home === req.params.work_from_home);
    res.send(newUsers);
});


app.get("/:id", (req, res) => {
    const newUsers = users.filter((user) => user.id == req.params.id);
    res.send(newUsers);
});




app.listen(3456, function () {
    console.log("Listening on port 3456");
});