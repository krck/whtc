import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class FindInputByStrId {
    @Field(_type => String, { nullable: false })
    id!: string;
}

@ArgsType()
export class FindInputByIntId {
    @Field(_type => Int, { nullable: false })
    id!: number;
}
