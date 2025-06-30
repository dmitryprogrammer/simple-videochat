import * as express from "express";
import * as ws from "ws";

const PORT = process.env.PORT ?? 3000;

const app = express();
const socket = new ws.Server({ port: 8080 });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

socket.on("connection", (socketItem: ws) => {
  socketItem.on("message", (message: ws) => {
    console.log(message);
  });
});
