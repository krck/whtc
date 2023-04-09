import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class FindInputMany {

    @Field(_type => Int, { nullable: true })
    take?: number;

    @Field(_type => Int, { nullable: true })
    skip?: number;

}
