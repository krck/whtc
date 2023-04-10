import { Field, Int, ObjectType } from "type-graphql";

// Datasheets_damage.csv
// The file contains the Damage table of the monster or vehicle datasheets
@ObjectType("DatasheetsDamageOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetsDamageOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier(link to the Datasheets.csv table)
  @Field(_type => Int, { nullable: false })
  datasheetId!: number;

  // Line number in the table.The data starts from line "1".Line "0" contains the description of the columns
  @Field(_type => Int, { nullable: false })
  line!: number;

  // Column #1(Column names can be in different combinations!: "RemainingW", "BS", "WS", "A", etc.)
  @Field(_type => String, { nullable: false })
  col1!: string;

  // Column #2
  @Field(_type => String, { nullable: false })
  col2!: string;

  // Column #3
  @Field(_type => String, { nullable: true })
  col3?: string | null;

  // Column #4
  @Field(_type => String, { nullable: true })
  col4?: string | null;

  // Column #5
  @Field(_type => String, { nullable: true })
  col5?: string | null;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
