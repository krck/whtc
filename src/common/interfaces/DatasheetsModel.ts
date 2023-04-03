// Datasheets_models.csv
// The file contains a table of models included in the datasheets
export class DatasheetsModel {
    datasheetId!: string; // Datasheet identifier(link to the Datasheets.csv table)
    line!: string; // Line number in the table(starting from 1)
    name!: string; // Model name
    m!: string; // Move chatacteristic
    ws!: string; // Weapon Skill chatacteristic
    bs!: string; // Ballistic Skill chatacteristic
    s!: string; // Strength chatacteristic
    t!: string; // Toughness chatacteristic
    w!: string; // Wounds chatacteristic
    a!: string; // Attacks chatacteristic
    ld!: string; // Leadership chatacteristic
    sv!: string; // Save chatacteristic
    cost!: string; // Model points cost
    costDescription!: string; // Model points cost comment(default "Does not include wargear")
    modelsPerUnit!: string; // Number of models
    costIncludingWargear!: boolean; // Model points cost includes wargear
    baseSize!: string; // Model base size
    baseSizeDescr!: string; // Model base size commentary(see Nobz or Skitarii Rangers)
}
