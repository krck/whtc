import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetsAbilityOutput } from "../output/datasheetsAbilityOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetsAbilityOutput)
export class DatasheetsAbilityResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetsAbilityOutput], { nullable: false })
    async datasheetsAbilities(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetsAbilityOutput[]> {
        const results = await context.dbClient.datasheetsAbility.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetsAbilityOutput, { nullable: true })
    async datasheetsAbility(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetsAbilityOutput | null> {
        const result = await context.dbClient.datasheetsAbility.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
