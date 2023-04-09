import { Field, Int, ObjectType } from "type-graphql";

// Factions.csv
// File contains a table of factions and subfactions
@ObjectType("FactionOutput", { isAbstract: true, simpleResolvers: true })
export class FactionOutput {

  @Field(_type => Int, { nullable: false })
  dbId!: number;

  // Faction identifier.Used to link to other tables
  @Field(_type => String, { nullable: false })
  id!: string;

  // Faction name
  @Field(_type => String, { nullable: false })
  name!: string;

  // Link to the faction page on the Wahapedia website
  @Field(_type => String, { nullable: false })
  link!: string;

  // True if it is a subfaction
  @Field(_type => Boolean, { nullable: false })
  is_subfaction!: boolean;

  // ID of parent faction(if this is subfaction)
  @Field(_type => String, { nullable: true })
  parent_id?: string | null;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

}
