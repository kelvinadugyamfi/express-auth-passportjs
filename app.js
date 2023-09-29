const express = require('express')
const dotEnv = require ('dotenv')
dotEnv.config()
const dbConnect = require ('./dbConnect')
const userInput = require ('./userInput')

const port = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    res.send('hello world')
})

const startServer = ()=>{
    try{
        app.listen(port, ()=>{
            dbConnect.authenticate()
            console.log (`Starting server on http://localhost:${port}`)
        })
    }catch(e){
        console.log('Database connection error')
    }
}

startServer()