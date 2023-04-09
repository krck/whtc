import { Field, Int, ObjectType } from "type-graphql";

// Datasheets_abilities.csv
// The file contains a table of the Abilities of the datasheets
@ObjectType("DatasheetsAbilityOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetsAbilityOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier(link to the Datasheets.csv table)
  @Field(_type => Int, { nullable: false })
  datasheetId!: number;

  // Line number in the table(starting from 1)
  @Field(_type => Int, { nullable: false })
  line!: number;

  // Ability ID(link to Abilities.csv table)
  @Field(_type => Int, { nullable: false })
  ability_id!: number;

  // Obsolete ability, used in the Index version of the datasheet
  @Field(_type => Boolean, { nullable: false })
  is_index_wargear!: boolean;

  // Ability points cost for a given datasheet
  @Field(_type => String, { nullable: false })
  cost!: string;

  // Belonging of this ability to a specific model of the datasheet
  @Field(_type => String, { nullable: true })
  model?: string | null;

  // This ability appears in "Other Wargear" section of datasheet
  @Field(_type => Boolean, { nullable: false })
  is_other_wargear!: boolean;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
