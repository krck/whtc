import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { WargearOutput } from "../output/wargearOutput";
import { FindInputMany } from "../input/findInputMany";

@Resolver(WargearOutput)
export class WargearResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [WargearOutput], { nullable: false })
    async wargears(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<WargearOutput[]> {
        const results = await context.dbClient.wargear.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => WargearOutput, { nullable: true })
    async wargear(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByStrId): Promise<WargearOutput | null> {
        const result = await context.dbClient.wargear.findUnique({
            where: { id: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
