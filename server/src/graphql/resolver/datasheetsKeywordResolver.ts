import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetsKeywordOutput } from "../output/datasheetsKeywordOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetsKeywordOutput)
export class DatasheetsKeywordResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetsKeywordOutput], { nullable: false })
    async datasheetsKeywords(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetsKeywordOutput[]> {
        const results = await context.dbClient.datasheetsKeyword.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetsKeywordOutput, { nullable: true })
    async datasheetsKeyword(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetsKeywordOutput | null> {
        const result = await context.dbClient.datasheetsKeyword.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
