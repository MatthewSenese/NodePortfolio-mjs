// Implement express to make use with node easier
const express = require('express')
const app = express()

// Directory for files
app.use(express.static(__dirname + '/public'))

// Port to run on for local host
const port = process.env.PORT || 8080;


// Listen on the defined port
// const logMessage = "Server running at http://localhost: " + port
app.listen(port, () => 
console.log(`Server running at http://localhost:${port};` 
+ 'press Ctrl-C to terminate.'))
