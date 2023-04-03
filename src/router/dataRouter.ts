import { CsvDataService } from "../common/service/csvDataService";
import express, { Request, Response } from "express";

export const dataRouter = express.Router();

dataRouter.get("/", async (req: Request, res: Response) => {
    try {
        const dataServic = CsvDataService.instance;
        const result = dataServic.parseCsv();

        res.status(200).send(result);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
