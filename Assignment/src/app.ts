import express from "express";
import bodyParser from "body-parser";
import { requestLogger } from "./auth";
import productRouter from "./routers/product";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(requestLogger);

// Router
app.use("/api", productRouter);

const port = 4980;

setTimeout(() => {
  app.listen(port, () => {
    // console.log(`Server started `);
  });
}, 1000);
export default app;

