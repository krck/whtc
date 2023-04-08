// Datasheets_options.csv
// The file contains a table of Wargear Options of datasheets
export class DatasheetsOption {
    datasheetId!: string;       // Datasheet identifier(link to the Datasheets.csv table)
    line!: string;              // Line number in the table(starting from 1)
    button!: string;            // Decorative symbol at the beginning of an option
    description!: string;       // Wargear option description
    isIndexWargear!: boolean;   // Obsolete wargear option, used in the Index version of the datasheet
}
