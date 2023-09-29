const { Module } = require('module')
const {Sequelize} = require ('sequelize')

const DBNAME = process.env.DB_NAME
const DBUSER = process.env.DB_USER
const DBPASS = process.env.DB_PASS

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    host : process.env.DB_HOST,
    dialect: 'mysql'
})

module.exports = sequelize