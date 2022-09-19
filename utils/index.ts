import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "sqlite",
    database: "./wilder.sqlite",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
})

export { dataSource }