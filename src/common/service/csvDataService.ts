import { cleanString, sanitizeString } from "../helper/stringHelpers";
import { CsvConfig, CsvConfigFull } from "../helper/csvConfig";
import { parse } from "csv-parse/sync";
import fetch from "node-fetch";
import xss from "xss";

export class CsvDataService {

    private static _instance: CsvDataService;
    public static get instance() { return this._instance || (this._instance = new this()); }

    //#region  Public Functions

    //
    // Fetch and parse the Wahapedia csv files
    // (csv files are picked, based on the csv-config)
    //
    public async getCsvData(): Promise<{ data: Map<CsvConfig, any[]>, output: Array<string> }> {
        try {
            const resultOutput = new Array<string>();
            const resultData = new Map<CsvConfig, any[]>();
            for (const csvConfig of CsvConfigFull) {
                const csvStr = await this.readCsvFromUrl(csvConfig.url);
                const csvData = this.parseCsvContent(csvStr, csvConfig);
                resultData.set(csvConfig, csvData);
                resultOutput.push(`Parsed csv ${csvConfig.url} - ${csvData.length} lines`);
            }
            return { data: resultData, output: resultOutput };
        } catch (error) {
            throw new Error(`[CSV]: Error parsing file: ${error}`);
        }
    }

    //#endregion

    //#region Private Functions

    private async readCsvFromUrl(url: string): Promise<string> {
        // Read the file from the URL
        const csvContent = await fetch(url).then(response => response.text());
        if (csvContent === undefined || !csvContent)
            throw new Error(`Could not get csv from url: ${url}`);

        // Cleanup the .csv (often ends with one too many rows / one unnecessary delimiter)
        const csvLines = csvContent.split("\n");
        for (let index = 0; index < csvLines.length; index++) {
            const line = sanitizeString(cleanString(csvLines[index]));
            if (line.endsWith("|"))
                csvLines[index] = line.substring(0, line.length - 1);
        }

        // Return csv as one long string (and strip all <tag> elements)
        return xss(csvLines.join("\n"), {
            onTag: function onTag(tag, html, options) { return ""; },
            onTagAttr: function onTag(tag, html, options) { return ""; }
        });
    }

    private parseCsvContent<Type>(csvContent: string, config: CsvConfig): Type[] {
        // Parse the csv string into (any) objects
        const parsedCsv: any = parse(csvContent, {
            fromLine: 2,
            delimiter: "|",
            columns: config.headers,
            skip_empty_lines: true,
            relax_quotes: true,
            cast: (columnValue, context) => {
                if (config.casts[context.column] === "boolean") { return (columnValue === "true"); }
                else if (config.casts[context.column] === "number") { return (!isNaN(Number(columnValue)) ? Number(columnValue) : null); }
                return columnValue;
            }
        });

        // Convert the (any) objects into the actual class object
        if (parsedCsv !== undefined && parsedCsv !== null && parsedCsv.length) {
            const result = new Array<Type>();
            for (const row of parsedCsv) {
                const tmpObj = new config.classCtor();
                for (const key in tmpObj) {
                    if (Object.prototype.hasOwnProperty.call(row, key))
                        tmpObj[key] = row[key];
                }
                result.push(tmpObj);
            }
            return result;
        }
        return [];
    }

    //#endregion

}
