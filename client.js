const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: '50541' // PORT number here,
  });

  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write('Name: 2sz');
  });

  return conn;
};

module.exports = {connect};