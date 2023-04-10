import { CsvConfigService } from "../common/service/csvConfigService";
import { CsvDataService } from "../common/service/csvDataService";
import express, { Request, Response } from "express";

export const dataRouter = express.Router();

dataRouter.get("/update", async (req: Request, res: Response) => {
    try {
        // Get csv data from wahapedia
        const csvConfig = CsvConfigService.instance.getConfig();
        const { data, output } = await CsvDataService.instance.getCsvData(csvConfig);
        for (const csvData of data) {
            // Update the sqlite DB with the csv data (Run the update as TRANSACTION)
            // 1. Clear the table of the old values (sqlite has no explicit TRUNCATE support)
            // 2. Insert all the new values (prisma-sqlite has NO createMany support)
            const insertCount = await csvData[0].transactionInsertFunc(csvData[1]);
            output.push(`Saved ${csvData[0].name} to database - ${insertCount} lines`);
        }
        res.status(200).send(output);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
