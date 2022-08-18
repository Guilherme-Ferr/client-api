import express from "express";
import cors from "cors";
import setUpRoutes from "./main/config/routes";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const app = express();

app.use(cors());
app.use(express.json());

setUpRoutes(app);

export { app };
