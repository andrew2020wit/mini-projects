const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8081 });

let count = 1;

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    // ws.send(`server responded: re: ${message}`);
  });

  setInterval(() => {
    count++;
    ws.send(`server interval send #${count}`);
  }, 1000);
});
