const express = require("express");

const app = express();
const port = 3000;

app.get("/auth", async (req, res) => {
  // Fetch URL from the internal system http://localhost:3001/admin
  // curl http://www.safe.corp/auth?url=http://localhost:3001/admin
  const url = req.query.url;
 
  // patch
  /*
  const isSafeHost = new URL(url)?.host === "safe.corp";

  if (!isSafeHost) {
    res.status(400).send("Invalid URL");

    return;
  }
  */

  try {
    const response = await fetch(url);
    const data = await response.text();

    res.send(data);
  } catch (error) {
    console.error(error);

    res.status(500).send("Error occurred while fetching data.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
