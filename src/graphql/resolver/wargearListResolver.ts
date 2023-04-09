import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { WargearListOutput } from "../output/wargearListOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(WargearListOutput)
export class WargearListResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [WargearListOutput], { nullable: false })
    async wargearLists(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<WargearListOutput[]> {
        const results = await context.dbClient.wargearList.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => WargearListOutput, { nullable: true })
    async wargearList(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<WargearListOutput | null> {
        const result = await context.dbClient.wargearList.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
