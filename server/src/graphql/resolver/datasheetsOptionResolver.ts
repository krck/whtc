import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetsOptionOutput } from "../output/datasheetsOptionOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetsOptionOutput)
export class DatasheetsOptionResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetsOptionOutput], { nullable: false })
    async datasheetsOptions(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetsOptionOutput[]> {
        const results = await context.dbClient.datasheetsOption.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetsOptionOutput, { nullable: true })
    async datasheetsOption(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetsOptionOutput | null> {
        const result = await context.dbClient.datasheetsOption.findFirst({
            where: { dbId: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
