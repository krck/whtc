import { Field, Int, ObjectType } from "type-graphql";

// Wargear_list.csv
// The file contains a table of profiles included in the Wargear
@ObjectType("WargearListOutput", { isAbstract: true, simpleResolvers: true })
export class WargearListOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Wargear ID(link to Wargear.csv table)
  @Field(_type => String, { nullable: false })
  wargear_id!: string;

  // Line number in the table(starting from 1)
  @Field(_type => Int, { nullable: false })
  line!: number;

  // Wargear profile name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Range characteristic
  @Field(_type => String, { nullable: false })
  Range!: string;

  // Type characteristic("Melee", "Assault D3", etc.)
  @Field(_type => String, { nullable: false })
  type!: string;

  // Strength characteristic
  @Field(_type => String, { nullable: false })
  S!: string;

  // Armour Penetration characteristic
  @Field(_type => String, { nullable: true })
  AP?: string | null;

  // Damage characteristic
  @Field(_type => String, { nullable: false })
  D!: string;

  // Ability description of wargear profile
  @Field(_type => String, { nullable: true })
  abilities?: string | null;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
