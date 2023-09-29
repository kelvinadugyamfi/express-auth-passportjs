const dbConnect = require ('./dbConnect')
const {DataTypes, Sequelize} = require ('sequelize')

const userInput = dbConnect.define ('user',{
    id :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    name :{
        type: DataTypes.STRING,
        allowNull: false    
    },
    userName :{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    }
})
 
userInput.sync({alter: true})

module.exports = userInput