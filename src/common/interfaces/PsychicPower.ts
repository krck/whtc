// PsychicPowers.csv
// File contains the Psychic Powers
export class PsychicPower {
    roll!: string; // Dice roll required to select the psychic power
    name!: string; // Psychic Power name
    factionId!: string; // Faction identifier.Used to link to other tables
    factionName!: string; // Faction name
    legend!: string; // Psychic Power background
    type!: string; // Psychic Power header
    description!: string; // Psychic Power description
    id!: string; // Psychic Power identifier.Used to link to other tables
}
