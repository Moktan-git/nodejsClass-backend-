const express = require("express")// express require gareko
const app = express() // express lai trigger garda

// const app = require("express")()  --- short-cut-->

app.get("/",(req,res)=>{ // (request,response)
  res.json({
    name: "Resham Tamang",
    address:"Sindhupalchok"
  })
})
app.get("/about",(req,res)=>{
  res.send("Bye world")
})






app.listen(3000,function(){
  console.log("server/backend/node project has started at port 3000")
})



