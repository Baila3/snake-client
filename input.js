
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",(data) => {
     handleUserInput(data, connection)
    });
  return stdin;
};
const handleUserInput = function (key, connection) {
  if (key === '\u0003') {
    process.exit();
  } 
  if (key === "w"){
    setInterval(() => {
    connection.write("Move: up")
    }, 500)
  }
  if (key === "a"){
    setInterval(() => {
    connection.write("Move: left")
  }, 500)
  }
  if (key === "s"){
    setInterval(() => {
    connection.write("Move: down")
  }, 500)
}
  if (key === "d"){
    setInterval(() => {
    connection.write("Move: right")
  }, 500)
}
};
module.exports = {
  setupInput,
  connection
}