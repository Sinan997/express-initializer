const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("express initializer");
})

app.listen(PORT,()=>{
    console.log("server is listening at http://localhost:",PORT);
})
