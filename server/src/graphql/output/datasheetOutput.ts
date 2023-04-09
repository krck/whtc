import { Field, Int, ObjectType } from "type-graphql";

// Datasheets.csv
// File contains a table of datasheets
@ObjectType("DatasheetOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier.Used to link to other tables
  @Field(_type => Int, { nullable: false })
  id!: number;

  // Datasheet name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Link to datasheet on the Wahapedia website
  @Field(_type => String, { nullable: false })
  link!: string;

  // Faction ID(link to Factions.csv table)
  @Field(_type => String, { nullable: false })
  faction_id!: string;

  // Add - on ID(link to Source.csv table)
  @Field(_type => Int, { nullable: true })
  source_id?: number | null;

  // Datasheet’s Battlefield Role
  @Field(_type => String, { nullable: true })
  role?: string | null;

  // Unit composition and equipment
  @Field(_type => String, { nullable: true })
  unit_composition?: string | null;

  // Transport capacity(if it is a TRANSPORT)
  @Field(_type => String, { nullable: true })
  transport?: string | null;

  // Power Points unit cost
  @Field(_type => String, { nullable: true })
  power_points?: string | null;

  // Description of the priest's capabilities (if it is a PRIEST)
  @Field(_type => String, { nullable: true })
  priest?: string | null;

  // Description of the psykers's capabilities (if it is a PSYKER)
  @Field(_type => String, { nullable: true })
  psyker?: string | null;

  // The datasheet is intended for the Open Play game only
  @Field(_type => Boolean, { nullable: false })
  open_play_only!: boolean;

  // The datasheet is intended to be used as a part of Crusade army.
  @Field(_type => Boolean, { nullable: false })
  crusade_only!: boolean;

  // Virtual datasheets not present in army list but can be summoned in some cases(eg Chaos Spawn)
  @Field(_type => Boolean, { nullable: false })
  virtual!: boolean;

  // Unit points cost(for units without models or units with one price for all models - see cost_per_unit below)
  @Field(_type => Int, { nullable: true })
  cost?: number | null;

  // Cost includes all models
  @Field(_type => Boolean, { nullable: true })
  cost_per_unit?: boolean | null;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
