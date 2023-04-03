// Factions.csv
// File contains a table of factions and subfactions
export class Faction {
    id!: string; // Faction identifier.Used to link to other tables
    name!: string; // Faction name
    link!: string; // Link to the faction page on the Wahapedia website
    isSubfaction!: boolean; // True if it is a subfaction
    parentId!: string; // ID of parent faction(if this is subfaction)
}
