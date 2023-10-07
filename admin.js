const express = require("express");

const app = express();
const port = 3001;

app.get("/admin", async (_, res) => {
  res.status(200).send({
    data: "Sensitive breached data",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
