import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { FindInputByIntId, FindInputByStrId } from "../input/findInputById";
import { PsychicPowerOutput } from "../output/psychicPowerOutput";
import { GraphqlWhtcContext } from "../graphqlWhtcContext";
import { FindInputMany } from "../input/findInputMany";

@Resolver(PsychicPowerOutput)
export class PsychicPowerResolver {

    //#region QUERY

    // @Authorized()
    @Query(_returns => [PsychicPowerOutput], { nullable: false })
    async psychicPowers(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputMany): Promise<PsychicPowerOutput[]> {
        const results = await context.dbClient.psychicPower.findMany({
            skip: args.skip,
            take: args.take
        });
        return results;
    }

    // @Authorized()
    @Query(_returns => PsychicPowerOutput, { nullable: true })
    async psychicPower(@Ctx() context: GraphqlWhtcContext, @Args() args: FindInputByIntId): Promise<PsychicPowerOutput | null> {
        const result = await context.dbClient.psychicPower.findUnique({
            where: { id: args.id }
        });
        return result;
    }

    //#endregion QUERY

    //#region MUTATION
    // ...
    //#endregion MUTATION

}
