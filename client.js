const net = require("net");
const { IP, PORT } = require("./constant");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
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
