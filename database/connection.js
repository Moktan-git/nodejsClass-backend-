// hami database connection ko code/logic lekxa
const {Sequelize,DataTypes} = require("sequelize")  //destructuring of 
// const sequelize = require("sequelize")
// const sequelize = sequelize.Sequelize
// const datatypes = sequelize.DataTypes


const sequelize = new Sequelize("process.env.HELLO") // class instantation (class bata object banauna--nakxa bata ghar banauna)

sequelize.authenticate()
.then(()=>{
  console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
  console.log("Error aayo," + err)
})

// const db = {}
// db.Sequelize = Sequelize
// db.sequelize = sequelize

// module.exports = db