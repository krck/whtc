import { Field, Int, ObjectType } from "type-graphql";

// Datasheets_models.csv
// The file contains a table of models included in the datasheets
@ObjectType("DatasheetsModelOutput", { isAbstract: true, simpleResolvers: true })
export class DatasheetsModelOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Datasheet identifier(link to the Datasheets.csv table)
  @Field(_type => Int, { nullable: false })
  datasheet_id!: number;

  // Line number in the table(starting from 1)
  @Field(_type => Int, { nullable: false })
  line!: number;

  // Model name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Move chatacteristic
  @Field(_type => String, { nullable: false })
  M!: string;

  // Weapon Skill chatacteristic
  @Field(_type => String, { nullable: true })
  WS?: string | null;

  // Ballistic Skill chatacteristic
  @Field(_type => String, { nullable: true })
  BS?: string | null;

  // Strength chatacteristic
  @Field(_type => String, { nullable: true })
  S?: string | null;

  // Toughness chatacteristic
  @Field(_type => String, { nullable: false })
  T!: string;

  // Wounds chatacteristic
  @Field(_type => String, { nullable: false })
  W!: string;

  // Attacks chatacteristic
  @Field(_type => String, { nullable: true })
  A?: string | null;

  // Leadership chatacteristic
  @Field(_type => String, { nullable: true })
  Ld?: string | null;

  // Save chatacteristic
  @Field(_type => String, { nullable: false })
  Sv!: string;

  // Model points cost
  @Field(_type => Int, { nullable: true })
  Cost?: number | null;

  // Model points cost comment(default "Does not include wargear")
  @Field(_type => String, { nullable: true })
  cost_description?: string | null;

  // Number of models
  @Field(_type => String, { nullable: true })
  models_per_unit?: string | null;

  // Model points cost includes wargear
  @Field(_type => Boolean, { nullable: false })
  cost_including_wargear!: boolean;

  // Model base size
  @Field(_type => String, { nullable: true })
  base_size?: string | null;

  // Model base size commentary(see Nobz or Skitarii Rangers)// Model base size commentary(see Nobz or Skitarii Rangers)
  @Field(_type => String, { nullable: true })
  base_size_descr?: string | null;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
