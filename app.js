const express = require("express")// express require gareko
const app = express() // express lai trigger garda

require("./database/connection.js")
// const app = require("express")()  --- short-cut-->


app.get("/books",(req,res)=>{

  res.json({
    message: "Books fetched successfully"
  })
})

app.post("/books",(req,res)=>{
  //logic to add book to database goes here
  res.json({
    message: "Book added successfully"
  })
})

app.delete("/books/:id",(req,res)=>{
  // logic to delete book
  res.json({
    message: "Book deleted successfully"
  })
})

app.patch("/books/:id",(req,res)=>{
  // logic to update book
  res.json({
    message: "Book updated successfully"
  })
})


// DATABASE_URL="postgresql://postgres.qbfwlwzfqwucafpqasmf:mynameisresham@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"





app.listen(4000,()=>{
  console.log("project/server/backend/node project has started at port 4000")
})



