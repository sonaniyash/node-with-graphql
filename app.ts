// -------------------- Packages -----------------
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { exit } from "process";

// -------------------- Graphql Schema -----------------
import schema from "./src/gql/index";

dotenv.config();

const app = express();
const isProduction: boolean = process.env.NODE_ENV === "production";
const port: string = process.env.PORT ? process.env.PORT : "8000";

const apolloServer = new ApolloServer({ schema });

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(express.static(__dirname + "/public"));

// Start Apollo Server
apolloServer
  .start()
  .then(() => {
    apolloServer.applyMiddleware({ app, path: "/api/graphql" });
    app.listen(port, () => console.log(`🚀 Successfully running at ${port}`));
  })
  .catch((err) => {
    console.error(err);
    exit(1);
  });
