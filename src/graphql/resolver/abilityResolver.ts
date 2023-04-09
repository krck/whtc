import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { AbilityOutput } from "../output/abilityOutput";
import { FindInputMany } from "../input/findInputMany";

@Resolver(AbilityOutput)
export class AbilityResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [AbilityOutput], { nullable: false })
    async abilities(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<AbilityOutput[]> {
        const results = await context.dbClient.ability.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => AbilityOutput, { nullable: true })
    async ability(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<AbilityOutput | null> {
        const result = await context.dbClient.ability.findFirst({
            where: { id: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
