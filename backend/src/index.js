const dotenv = require('dotenv');
const express = require("express");
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const { Server } = require("socket.io");
console.log(Server);

require('./model/schema');
require("./database/conn");
require('./model/ProductSchema');
const router = require('./routers/router');

const app = express();
const httpServer = require('http').createServer(app); // Create HTTP server

const io = new Server(httpServer); // Attach Socket.IO to HTTP server
console.log(io);
const PORT = process.env.PORT || 9000;

app.use(cors({ origin: "*" }));

dotenv.config({ path: '../config.env' });

io.on('connection', (socket) => {
  console.log('a new user connected', socket.id);
});

app.use(express.json());
app.use(router);

httpServer.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
