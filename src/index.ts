import { createConnection } from "typeorm";
import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      username: "postgres",
      database: "typeorm",
      password: "passw0rd",
      port: 5432,
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log("connected to postgres");

    app.listen(8080, () => {
      console.log("App running on port 8080");
    });

    app.use(express.json());
    app.use(createClientRouter);
    app.use(createBankerRouter);
  } catch (error) {
    console.error(error);
    throw new Error("unable to connect");
  }
};

main();
