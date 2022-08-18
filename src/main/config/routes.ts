import { Express, Router } from "express";
import { readdirSync } from "fs";
import path from "path";

export default (app: Express): void => {
  const router = Router();
  app.use(router);

  readdirSync(path.resolve(__dirname, "..", "routes")).map((folder) => {
    readdirSync(path.resolve(__dirname, "..", "routes", `${folder}`)).map(
      async (file) => {
        (await import(`../routes/${folder}/${file}`)).default(router);
      }
    );
  });
};
