import express, { Express, Request, Response } from "express";
import { EnvService } from "./common/service/envService";
import { dataRouter } from "./router/dataRouter";
import helmet from "helmet";
import cors from "cors";

// Init app
const app = express();
const port = EnvService.instance.API_PORT;
if (!port) {
    process.exit(1);
}

// Add middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Controller routes
app.use("/api/data", dataRouter);
// Simple test route
app.get("/check", async (req: Request, res: Response) => { res.status(200).send("whtc-api: ok"); });

// Start the Express server
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`⚡️[server]: whtc-api: http://localhost:${port}/api/data`);
});
