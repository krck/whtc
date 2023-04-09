import { Field, Int, ObjectType } from "type-graphql";

// Datasheets_options.csv
// The file contains a table of Wargear Options of datasheets
@ObjectType("DatasheetsOptionOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetsOptionOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier(link to the Datasheets.csv table)
  @Field(_type => Int, { nullable: false })
  datasheet_id!: number;

  // Line number in the table(starting from 1)
  @Field(_type => Int, { nullable: false })
  line!: number;

  // Decorative symbol at the beginning of an option
  @Field(_type => String, { nullable: true })
  button?: string | null;

  // Wargear option description
  @Field(_type => String, { nullable: true })
  description?: string | null;

  // Obsolete wargear option, used in the Index version of the datasheet
  @Field(_type => Boolean, { nullable: false })
  is_index_wargear!: boolean;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
