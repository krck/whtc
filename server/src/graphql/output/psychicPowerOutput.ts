import { Field, Int, ObjectType } from "type-graphql";

// PsychicPowers.csv
// File contains the Psychic Powers
@ObjectType("PsychicPowerOutput", { isAbstract: true, simpleResolvers: true })
export class PsychicPowerOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Dice roll required to select the psychic power
  @Field(_type => Int, { nullable: true })
  roll?: number | null;

  // Psychic Power name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Faction identifier.Used to link to other tables
  @Field(_type => String, { nullable: false })
  faction_id!: string;

  // Faction name
  @Field(_type => String, { nullable: false })
  faction_name!: string;

  // Psychic Power background
  @Field(_type => String, { nullable: true })
  legend?: string | null;

  // Psychic Power header
  @Field(_type => String, { nullable: false })
  type!: string;

  // Psychic Power description
  @Field(_type => String, { nullable: false })
  description!: string;

  // Psychic Power identifier.Used to link to other tables
  @Field(_type => Int, { nullable: false })
  id!: number;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
