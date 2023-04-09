import { Field, Int, ObjectType } from "type-graphql";

// Wargear.csv
// The file contains a table of Wargear not referenced to datasheets(but used in them) plus relics
@ObjectType("WargearOutput", { isAbstract: true, simpleResolvers: true })
export class WargearOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Wargear identifier.Used to link to other tables
  @Field(_type => String, { nullable: false })
  id!: string;

  // Wargear name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Wargear type
  @Field(_type => String, { nullable: false })
  type!: string;

  // Wargear description(for non - profile relics or weapons with two profiles)
  @Field(_type => String, { nullable: true })
  description?: string | null;

  // Add - on ID(link to Source.csv table)
  @Field(_type => String, { nullable: true })
  source_id?: string | null;

  // Wargear is a relic
  @Field(_type => Boolean, { nullable: false })
  is_relic!: boolean;

  // Faction ID(link to Factions.csv table)
  @Field(_type => String, { nullable: false })
  faction_id!: string;

  // Faction name
  @Field(_type => String, { nullable: false })
  faction_name!: string;

  // Relic background
  @Field(_type => String, { nullable: true })
  legend?: string | null;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
