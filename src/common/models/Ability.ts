// Abilities.csv!:
// The file contains the Abilities table of the datasheet
export class Ability {
    id!: number;                // Abilities identifier.Used to link to other tables
    type!: string | null;       // Ability type
    name!: string;              // Ability name
    legend!: string | null;     // Ability background
    isOtherWargear!: boolean;   // This ability appears in "Other Wargear" section of datasheet
    factionId!: string;         // Faction ID(link to Factions.csv table)
    description!: string;       // Ability description
}
