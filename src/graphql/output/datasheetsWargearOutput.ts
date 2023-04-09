import { Field, Int, ObjectType } from "type-graphql";

// Datasheets_wargear.csv
// The file contains a table of datasheet’s Wargear
@ObjectType("DatasheetsWargearOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetsWargearOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier(link to the Datasheets.csv table)
  @Field(_type => Int, { nullable: false })
  datasheet_id!: number;

  // Line number in the table(starting from 1)
  @Field(_type => Int, { nullable: false })
  line!: number;

  // Wargear ID(link to Wargear.csv table)
  @Field(_type => String, { nullable: false })
  wargear_id!: string;

  // Wargear points cost for a given datasheet
  @Field(_type => String, { nullable: false })
  cost!: string;

  // Obsolete wargear option, used in the Index version of the datasheet
  @Field(_type => Boolean, { nullable: false })
  is_index_wargear!: boolean;

  // Belonging of this wargear to a specific model of the datasheet
  @Field(_type => String, { nullable: true })
  model?: string | null;

  // Wargear available as an optional upgrade
  @Field(_type => Boolean, { nullable: false })
  is_upgrade!: boolean;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
