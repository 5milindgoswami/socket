const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 5000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
io.on("connection", (socket) => {
  console.log("user is connect");
  socket.on("disconnect", () => console.log("user is disconnet"));
});
http.listen(PORT, () => console.log("listing to port 5000"));
