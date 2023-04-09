import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetsDamageOutput } from "../output/datasheetsDamageOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetsDamageOutput)
export class DatasheetsDamageResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetsDamageOutput], { nullable: false })
    async datasheetsDamages(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetsDamageOutput[]> {
        const results = await context.dbClient.datasheetsDamage.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetsDamageOutput, { nullable: true })
    async datasheetsDamage(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetsDamageOutput | null> {
        const result = await context.dbClient.datasheetsDamage.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
