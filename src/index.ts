import { createConnection } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      username: "postgres",
      database: "typeorm",
      password: "passw0rd",
      port: 5432,
      entities: [Client, Banker],
      synchronize: true,
    });
    console.log("connected to postgres");
  } catch (error) {
    console.error(error);
    throw new Error("unable to connect");
  }
};

main();
