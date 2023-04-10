import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { DatasheetOutput } from "../output/datasheetOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(DatasheetOutput)
export class DatasheetResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [DatasheetOutput], { nullable: false })
    async datasheets(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<DatasheetOutput[]> {
        const results = await context.dbClient.datasheet.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => DatasheetOutput, { nullable: true })
    async datasheet(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<DatasheetOutput | null> {
        const result = await context.dbClient.datasheet.findUnique({
            where: { id: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
