// Implement express to make use with node easier
const express = require('express')
const app = express()

// Directory for files
app.use(express.static(__dirname + '/public'))

// Implement other previous apps
app.get('/regex', (req, res) => {res.render('regex')})
app.get('/resume', (req, res) => {res.render('resume')})
app.get('/diceRoll', (req, res) => {res.render('diceRoll')})
app.get('/getting-to-know-you', (req, res) => {
    res.render('getting-to-know-you')})

// Port to run on for local host
const port = process.env.PORT || 8080;


// Listen on the defined port
const logMessage = "Server running at http://localhost: " + port
app.listen(port, () => {
    console.log(logMessage)
    console.log('press Ctrl-C to terminate.\n')
})
