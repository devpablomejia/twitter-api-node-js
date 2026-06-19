const express = require('express');
const config = require("./config/index");
const tweetsRouter = require("./routes/tweetsRouter")
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorMiddlewares');

const app = express();
const PORT = config.port;

app.use(express.json());
app.use("/tweets", tweetsRouter);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(PORT, () => console.log(`SERVER IS RUN ON PORT http://localhost:${PORT}`))