
// Factions.csv
// File contains a table of factions and subfactions
export interface Faction {
    id: string;                 // Faction identifier.Used to link to other tables
    name: string;               // Faction name
    link: string;               // Link to the faction page on the Wahapedia website
    isSubfaction: boolean;      // True if it is a subfaction
    parentId: string;           // ID of parent faction(if this is subfaction)
}

// Datasheets.csv
// File contains a table of datasheets
export interface DataSheet {
    id: string;                 // Datasheet identifier.Used to link to other tables
    name: string;               // Datasheet name
    link: string;               // Link to datasheet on the Wahapedia website
    factionId: string;          // Faction ID(link to Factions.csv table)
    sourceId: string;           // Add - on ID(link to Source.csv table)
    role: string;               // Datasheet’s Battlefield Role
    unitComposition: string;    // Unit composition and equipment
    transport: string;          // Transport capacity(if it is a TRANSPORT)
    powerPoints: string;        // Power Points unit cost
    priest: string;             // Description of the priest's capabilities (if it is a PRIEST)
    psyker: string;             // Description of the psykers's capabilities (if it is a PSYKER)
    openPlayOnly: boolean;      // The datasheet is intended for the Open Play game only
    crusadeOnly: boolean;       // The datasheet is intended to be used as a part of Crusade army.
    virtual: string;            // Virtual datasheets not present in army list but can be summoned in some cases(eg Chaos Spawn)
    cost: string;               // Unit points cost(for units without models or units with one price for all models - see cost_per_unit below)
    costPerUnit: boolean;       // Cost includes all models
}

// Datasheets_abilities.csv
// The file contains a table of the Abilities of the datasheets
export interface DatasheetsAbility {
    datasheetId: string;        // Datasheet identifier(link to the Datasheets.csv table)
    line: string;               // Line number in the table(starting from 1)
    abilityId: string;          // Ability ID(link to Abilities.csv table)
    isIndexWargear: boolean;    // Obsolete ability, used in the Index version of the datasheet
    cost: string;               // Ability points cost for a given datasheet
    model: string;              // Belonging of this ability to a specific model of the datasheet
    isOtherWargear: boolean;    // This ability appears in "Other Wargear" section of datasheet
}

// Datasheets_damage.csv
// The file contains the Damage table of the monster or vehicle datasheets
export interface DatasheetsDamage {
    datasheetId: string;        // Datasheet identifier(link to the Datasheets.csv table)
    line: string;               // Line number in the table.The data starts from line "1".Line "0" contains the description of the columns
    col1: string;               // Column #1(Column names can be in different combinations: "RemainingW", "BS", "WS", "A", etc.)
    col2: string;               // Column #2
    col3: string;               // Column #3
    col4: string;               // Column #4
    col5: string;               // Column #5
}

// Datasheets_keywords.csv
// The file contains a table of the Keywords of the datasheets
export interface DatasheetsKeyword {
    datasheetId: string;            // Datasheet identifier(link to the Datasheets.csv table)
    keyword: string;                // Datasheet keyword
    model: string;                  // Belonging of this keyword to a specific model of the datasheet
    isFactionKeyword: boolean;      // This is a Faction Keyword
}

// Datasheets_models.csv
// The file contains a table of models included in the datasheets
export interface DatasheetsModel {
    datasheetId: string;            // Datasheet identifier(link to the Datasheets.csv table)
    line: string;                   // Line number in the table(starting from 1)
    name: string;                   // Model name
    m: string;                      // Move chatacteristic
    ws: string;                     // Weapon Skill chatacteristic
    bs: string;                     // Ballistic Skill chatacteristic
    s: string;                      // Strength chatacteristic
    t: string;                      // Toughness chatacteristic
    w: string;                      // Wounds chatacteristic
    a: string;                      // Attacks chatacteristic
    ld: string;                     // Leadership chatacteristic
    sv: string;                     // Save chatacteristic
    cost: string;                   // Model points cost
    costDescription: string;        // Model points cost comment(default "Does not include wargear")
    modelsPerUnit: string;          // Number of models
    costIncludingWargear: boolean;  // Model points cost includes wargear
    baseSize: string;               // Model base size
    baseSizeDescr: string;          // Model base size commentary(see Nobz or Skitarii Rangers)
}

// Datasheets_options.csv
// The file contains a table of Wargear Options of datasheets
export interface DatasheetsOption {
    datasheetId: string;        // Datasheet identifier(link to the Datasheets.csv table)
    line: string;               // Line number in the table(starting from 1)
    button: string;             // Decorative symbol at the beginning of an option
    description: string;        // Wargear option description
    isIndexWargear: boolean;    // Obsolete wargear option, used in the Index version of the datasheet
}

// Datasheets_wargear.csv
// The file contains a table of datasheet’s Wargear
export interface DatasheetsWargear {
    datasheetId: string;        // Datasheet identifier(link to the Datasheets.csv table)
    line: string;               // Line number in the table(starting from 1)
    wargearId: string;          // Wargear ID(link to Wargear.csv table)
    cost: string;               // Wargear points cost for a given datasheet
    isIndexWargear: boolean;    // Obsolete wargear option, used in the Index version of the datasheet
    model: string;              // Belonging of this wargear to a specific model of the datasheet
    isUpgrade: boolean;         // Wargear available as an optional upgrade
}

// Wargear.csv
// The file contains a table of Wargear not referenced to datasheets(but used in them) plus relics
export interface Wargear {
    id: string;                 // Wargear identifier.Used to link to other tables
    name: string;               // Wargear name
    type: string;               // Wargear type
    description: string;        // Wargear description(for non - profile relics or weapons with two profiles)
    sourceId: string;           // Add - on ID(link to Source.csv table)
    isRelic: boolean;           // Wargear is a relic
    factionId: string;          // Faction ID(link to Factions.csv table)
    factionName: string;        // Faction name
    legend: string;             // Relic background
}

// Wargear_list.csv
// The file contains a table of profiles included in the Wargear
export interface WargearList {
    wargearId: string;          // Wargear ID(link to Wargear.csv table)
    line: string;               // Line number in the table(starting from 1)
    name: string;               // Wargear profile name
    range: string;              // Range characteristic
    type: string;               // Type characteristic("Melee", "Assault D3", etc.)
    s: string;                  // Strength characteristic
    ap: string;                 // Armour Penetration characteristic
    d: string;                  // Damage characteristic
    abilities: string;          // Ability description of wargear profile
}

// Abilities.csv
// The file contains the Abilities table of the datasheet
export interface Ability {
    id: string;                 // Abilities identifier.Used to link to other tables
    type: string;               // Ability type
    name: string;               // Ability name
    legend: string;             // Ability background
    isOtherWargear: boolean;    // This ability appears in "Other Wargear" section of datasheet
    factionId: string;          // Faction ID(link to Factions.csv table)
    description: string;        // Ability description
}

// PsychicPowers.csv
// File contains the Psychic Powers
export interface PsychicPower {
    roll: string;               // Dice roll required to select the psychic power
    name: string;               // Psychic Power name
    factionId: string;          // Faction identifier.Used to link to other tables
    factionName: string;        // Faction name
    legend: string;             // Psychic Power background
    type: string;               // Psychic Power header
    description: string;        // Psychic Power description
    id: string;                 // Psychic Power identifier.Used to link to other tables
}
