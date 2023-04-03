// Datasheets_keywords.csv
// The file contains a table of the Keywords of the datasheets
export class DatasheetsKeyword {
    datasheetId!: string; // Datasheet identifier(link to the Datasheets.csv table)
    keyword!: string; // Datasheet keyword
    model!: string; // Belonging of this keyword to a specific model of the datasheet
    isFactionKeyword!: boolean; // This is a Faction Keyword
}
