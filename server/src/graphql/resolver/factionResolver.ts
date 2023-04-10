import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FactionOutput } from "../output/factionOutput";
import { FindInputMany } from "../input/findInputMany";

@Resolver(FactionOutput)
export class FactionResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [FactionOutput], { nullable: false })
    async factions(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<FactionOutput[]> {
        const results = await context.dbClient.faction.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => FactionOutput, { nullable: true })
    async faction(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByStrId): Promise<FactionOutput | null> {
        const result = await context.dbClient.faction.findUnique({
            where: { id: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
