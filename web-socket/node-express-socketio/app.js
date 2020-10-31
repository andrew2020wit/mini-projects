var app = require("express")();
var http = require("http").createServer(app);
var socketIo = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

socketIo.on("connection", (socket) => {
  console.log(`Client with id ${socket.id} connected`);

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    socketIo.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
