import * as express from "express";
import { Request, Response } from "express";
import { dataSource } from "./utils";

const app = express();
app.use(express.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Api is working");
});

app.listen(8000, () => {
  dataSource.initialize();
  console.log("Server listening on port 8000!");
});
