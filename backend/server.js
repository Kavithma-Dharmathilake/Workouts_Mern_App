const express = require ('express')
require('dotenv').config()


//express app
const app = express()

//routes
app.get('/', (req, res)=>{
    res.json({
        mssg:'welcome to the app'
    })
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listenening on port ',process.env.PORT)
})