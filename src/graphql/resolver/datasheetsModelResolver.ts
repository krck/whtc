import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetsModelOutput } from "../output/datasheetsModelOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetsModelOutput)
export class DatasheetsModelResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetsModelOutput], { nullable: false })
    async datasheetsModels(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetsModelOutput[]> {
        const results = await context.dbClient.datasheetsModel.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetsModelOutput, { nullable: true })
    async datasheetsModel(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetsModelOutput | null> {
        const result = await context.dbClient.datasheetsModel.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
