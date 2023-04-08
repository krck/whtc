// Datasheets_wargear.csv
// The file contains a table of datasheet’s Wargear
export class DatasheetsWargear {
    datasheetId!: string;       // Datasheet identifier(link to the Datasheets.csv table)
    line!: string;              // Line number in the table(starting from 1)
    wargearId!: string;         // Wargear ID(link to Wargear.csv table)
    cost!: string;              // Wargear points cost for a given datasheet
    isIndexWargear!: boolean;   // Obsolete wargear option, used in the Index version of the datasheet
    model!: string;             // Belonging of this wargear to a specific model of the datasheet
    isUpgrade!: boolean;        // Wargear available as an optional upgrade
}
