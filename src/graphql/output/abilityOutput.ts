import { Field, Int, ObjectType } from "type-graphql";

// Abilities.csv:
// The file contains the Abilities table of the datasheet
@ObjectType("AbilityOutput", { isAbstract: true, simpleResolvers: true })
export class AbilityOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Abilities identifier.Used to link to other tables
  @Field(_type => Int, { nullable: false })
  id!: number;

  // Ability type
  @Field(_type => String, { nullable: true })
  type?: string | null;

  // Ability name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Ability background
  @Field(_type => String, { nullable: true })
  legend?: string | null;

  // This ability appears in "Other Wargear" section of datasheet
  @Field(_type => Boolean, { nullable: false })
  is_other_wargear!: boolean;

  // Faction ID(link to Factions.csv table)
  @Field(_type => String, { nullable: false })
  faction_id!: string;

  // Ability description
  @Field(_type => String, { nullable: false })
  description!: string;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
