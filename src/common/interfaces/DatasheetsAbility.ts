// Datasheets_abilities.csv
// The file contains a table of the Abilities of the datasheets
export class DatasheetsAbility {
    datasheetId!: string; // Datasheet identifier(link to the Datasheets.csv table)
    line!: string; // Line number in the table(starting from 1)
    abilityId!: string; // Ability ID(link to Abilities.csv table)
    isIndexWargear!: boolean; // Obsolete ability, used in the Index version of the datasheet
    cost!: string; // Ability points cost for a given datasheet
    model!: string; // Belonging of this ability to a specific model of the datasheet
    isOtherWargear!: boolean; // This ability appears in "Other Wargear" section of datasheet
}
