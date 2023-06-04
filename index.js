const express = require('express')
const app = express()
const port = 9000

app.listen(port, () => {
    console.log("Server started on port " + port)
})

app.get("/", (req, res) => {
    console.log("Get request on /")
    res.status(200)
    res.sendFile(__dirname + '/public/index.html')
})