// Abilities.csv!:
// The file contains the Abilities table of the datasheet
export class Ability {
    id!: string; // Abilities identifier.Used to link to other tables
    type!: string; // Ability type
    name!: string; // Ability name
    legend!: string; // Ability background
    isOtherWargear!: boolean; // This ability appears in "Other Wargear" section of datasheet
    factionId!: string; // Faction ID(link to Factions.csv table)
    description!: string; // Ability description
}
