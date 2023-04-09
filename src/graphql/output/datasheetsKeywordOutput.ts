import { Field, Int, ObjectType } from "type-graphql";

// Datasheets_keywords.csv
// The file contains a table of the Keywords of the datasheets
@ObjectType("DatasheetsKeywordOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetsKeywordOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier(link to the Datasheets.csv table)
  @Field(_type => Int, { nullable: false })
  datasheetId!: number;

  // Datasheet keyword
  @Field(_type => String, { nullable: false })
  keyword!: string;

  // Belonging of this keyword to a specific model of the datasheet
  @Field(_type => String, { nullable: true })
  model?: string | null;

  // This is a Faction Keyword
  @Field(_type => Boolean, { nullable: false })
  is_faction_keyword!: boolean;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
