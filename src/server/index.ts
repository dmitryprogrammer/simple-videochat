import * as express from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();

let counter = 0;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  setInterval(() => {
    counter++;
    console.log(counter);
  }, 100);
});
