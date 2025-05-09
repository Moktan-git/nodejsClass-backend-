// hami database connection ko code/logic lekxa
const {Sequelize,DataTypes} = require("sequelize")  //destructuring of 
// const sequelize = require("sequelize")
// const sequelize = sequelize.Sequelize
// const datatypes = sequelize.DataTypes
// database imports
// const bookModel = require("./models/book.model")
 
const sequelize = new Sequelize("postgresql://postgres.qbfwlwzfqwucafpqasmf:mynameisresham@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true") // class instantation (class bata object banauna--nakxa bata ghar banauna)

sequelize.authenticate()
.then(()=>{
  console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
  console.log("Error aayo," + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model.js")(sequelize,DataTypes)
db.products = require("./models/product.model")(sequelize,DataTypes)


// migrate code ho hai yo chai
sequelize.sync({alter : false}).then(()=>{
  console.log("migrate vayo hai tw ")
})

module.exports = db
