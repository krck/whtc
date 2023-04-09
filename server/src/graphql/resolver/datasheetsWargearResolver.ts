import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetsWargearOutput } from "../output/datasheetsWargearOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetsWargearOutput)
export class DatasheetsWargearResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetsWargearOutput], { nullable: false })
    async datasheetsWargears(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetsWargearOutput[]> {
        const results = await context.dbClient.datasheetsWargear.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetsWargearOutput, { nullable: true })
    async datasheetsWargear(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetsWargearOutput | null> {
        const result = await context.dbClient.datasheetsWargear.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
