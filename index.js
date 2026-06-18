const express = require('express');
const tweetsRouter = require("./routes/tweetsRouter.js")

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/tweets", tweetsRouter);

app.listen(PORT, () => console.log(`SERVER IS RUN ON PORT http://localhost:${PORT}`))