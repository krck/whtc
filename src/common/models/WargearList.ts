// Wargear_list.csv
// The file contains a table of profiles included in the Wargear
export class WargearList {
    wargearId!: string;     // Wargear ID(link to Wargear.csv table)
    line!: string;          // Line number in the table(starting from 1)
    name!: string;          // Wargear profile name
    range!: string;         // Range characteristic
    type!: string;          // Type characteristic("Melee", "Assault D3", etc.)
    s!: string;             // Strength characteristic
    ap!: string;            // Armour Penetration characteristic
    d!: string;             // Damage characteristic
    abilities!: string;     // Ability description of wargear profile
}
