// Wargear.csv
// The file contains a table of Wargear not referenced to datasheets(but used in them) plus relics
export class Wargear {
    id!: string;            // Wargear identifier.Used to link to other tables
    name!: string;          // Wargear name
    type!: string;          // Wargear type
    description!: string;   // Wargear description(for non - profile relics or weapons with two profiles)
    sourceId!: string;      // Add - on ID(link to Source.csv table)
    isRelic!: boolean;      // Wargear is a relic
    factionId!: string;     // Faction ID(link to Factions.csv table)
    factionName!: string;   // Faction name
    legend!: string;        // Relic background
}
