import { DataSource } from "typeorm";
import Grade from "../models/Grade";
import Skills from "../models/Skills";
import Wilder from "../models/Wilder";

const datasource = new DataSource({
  type: "sqlite",
  database: "./wilder.sqlite",
  synchronize: true,
  entities: [Wilder, Skills, Grade],
  logging: ["query"],
});

export default datasource;
