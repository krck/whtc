// Datasheets_damage.csv
// The file contains the Damage table of the monster or vehicle datasheets
export class DatasheetsDamage {
    datasheetId!: string;   // Datasheet identifier(link to the Datasheets.csv table)
    line!: string;          // Line number in the table.The data starts from line "1".Line "0" contains the description of the columns
    col1!: string;          // Column #1(Column names can be in different combinations!: "RemainingW", "BS", "WS", "A", etc.)
    col2!: string;          // Column #2
    col3!: string;          // Column #3
    col4!: string;          // Column #4
    col5!: string;          // Column #5
}
