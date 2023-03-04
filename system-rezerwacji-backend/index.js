const express = require("express");
const app = express();
const port = "4000"
var cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.get('/', (req,res) => {
    res.send("Bajojajo");
});

app.post("/post_test", async(req,res)=>{
    let {test} = req.body
    console.log(test)

});

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
});