const app=require("./app")
require("dotenv").config()

console.log(process.env.PORT)

app.listen(process.env.PORT,()=>{
    console.log("now listening")
})

