// const net = require("net");
const { setupInput, connection } = require('./input')
const { connect } = require('./client')
// establishes a connection with the game server


console.log("Connecting ...");

// connection
setupInput(connect())