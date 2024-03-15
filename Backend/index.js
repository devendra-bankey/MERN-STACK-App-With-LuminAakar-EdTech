const express = require('express')
const app = express()
// created app instance for express

const PORT=4000;

app.get('/apiv1/',(req,res) => {
    res.send('Hello Get Request Running Sucessfully')
})

app.listen(PORT,() => {
    console.log(`Server Started and Listening To PORT = ${PORT}`)
})