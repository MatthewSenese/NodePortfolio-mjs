var http = require('http');
var url = require('url');

const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);

    // Standard Header
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Matthew: Assignment Portfolio</h1><br><br><hr><br>')

    var q = request.url;
    if (q != '/past') {
        response.write('<h2>Current Assignments: </h2><br>')

        response.write('<a href = "https://thankful-pebble-0d8039610.1.azurestaticapps.net/">Getting to Know Our Team</a><br>')
        response.write('<a href = "https://node-on-azure-mjs.azurewebsites.net/">Node on Azure Example</a><br><br>')
    }
    else {
        response.write('<h2>Past Assignments:</h2><br>')
            
        response.write('<a href="https://thankful-water-089720a10.1.azurestaticapps.net/">Web Resume</a> <br>')
        response.write('<a href="https://kind-hill-02c495910.1.azurestaticapps.net/">Dice Roller</a> <br>')
        response.write('<a href="https://mango-pebble-032731f10.1.azurestaticapps.net/">Regular Expression Tester</a><br><br>')
    }

    // Show the url. 
    response.write("req.url="+request.url+"<br><br>");

    // Suggest adding something to the url so that we can parse it. 
    response.write("Consider adding '/past' to the URL to see past assignments.<br><br>");
    
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);