// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT1 = 7000;
const PORT2 = 7500;

// Create a generic function to handle requests and responses
const handleRequest1 = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`The true sign of intelligence is not knowledge but imagination.`);
};

const handleRequest2 = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`Stop calling your dream. Start calling it your plan.`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server.listen(PORT1, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT1}`);
});

const server2 = http.createServer(handleRequest2);

server2.listen(PORT2, () => {
    console.log(`Server listening on: http://localhost:${PORT2}`);
})