// Datasheets.csv
// File contains a table of datasheets
export class DataSheet {
    id!: string; // Datasheet identifier.Used to link to other tables
    name!: string; // Datasheet name
    link!: string; // Link to datasheet on the Wahapedia website
    factionId!: string; // Faction ID(link to Factions.csv table)
    sourceId!: string; // Add - on ID(link to Source.csv table)
    role!: string; // Datasheet’s Battlefield Role
    unitComposition!: string; // Unit composition and equipment
    transport!: string; // Transport capacity(if it is a TRANSPORT)
    powerPoints!: string; // Power Points unit cost
    priest!: string; // Description of the priest's capabilities (if it is a PRIEST)
    psyker!: string; // Description of the psykers's capabilities (if it is a PSYKER)
    openPlayOnly!: boolean; // The datasheet is intended for the Open Play game only
    crusadeOnly!: boolean; // The datasheet is intended to be used as a part of Crusade army.
    virtual!: string; // Virtual datasheets not present in army list but can be summoned in some cases(eg Chaos Spawn)
    cost!: string; // Unit points cost(for units without models or units with one price for all models - see cost_per_unit below)
    costPerUnit!: boolean; // Cost includes all models
}
