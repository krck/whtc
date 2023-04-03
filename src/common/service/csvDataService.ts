import { Faction } from "../interfaces/Faction";
import { parse } from "csv-parse/sync";
import * as fs from "fs";

export class CsvDataService {

    private static _instance: CsvDataService;
    public static get instance() { return this._instance || (this._instance = new this()); }

    //#region  Public Functions

    public parseCsv(): any {
        try {
            const test = this.createTable("D:\\Projects\\neatBS\\data\\Factions.csv", Faction);
            return test;
        } catch (error) {
            throw new Error(`[FILE]: Error reading file: ${error}`);
        }
    }

    //#endregion

    //#region Private Functions

    private createTable<Type>(srcPath: string, ClassType: { new(): Type }): Type[] {
        const fileContent = fs.readFileSync(srcPath, { encoding: "utf-8" });
        const headers = Object.getOwnPropertyNames(new ClassType()).concat("_empty");
        const factionsRaw: any = parse(fileContent, {
            delimiter: "|",
            columns: headers,
            fromLine: 2,
            skip_empty_lines: true
        });
        return this.toObjectArr(factionsRaw, ClassType);
    }

    private toObjectArr<Type>(raw: any, ClassType: { new(): Type }): Type[] {
        if (raw === undefined || raw === null || !raw.length)
            return [];

        const result = new Array<Type>();
        for (const row of raw) {
            const tmp = new ClassType();
            for (const key in tmp) {
                if (Object.prototype.hasOwnProperty.call(row, key)) {
                    tmp[key] = row[key];
                }
                if (key === "value" && row["#text"]) {
                    (tmp as any)["value"] = row["#text"];
                }
            }
            result.push(tmp);
        }
        return result;
    }

    //#endregion

}
