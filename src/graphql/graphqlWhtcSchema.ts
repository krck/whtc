import { DatasheetsAbilityResolver } from "./resolver/datasheetsAbilityResolver";
import { DatasheetsKeywordResolver } from "./resolver/datasheetsKeywordResolver";
import { DatasheetsWargearResolver } from "./resolver/datasheetsWargearResolver";
import { DatasheetsDamageResolver } from "./resolver/datasheetsDamageResolver";
import { DatasheetsOptionResolver } from "./resolver/datasheetsOptionResolver";
import { DatasheetsModelResolver } from "./resolver/datasheetsModelResolver";
import { PsychicPowerResolver } from "./resolver/psychicPowerResolver";
import { WargearListResolver } from "./resolver/wargearListResolver";
import { DatasheetResolver } from "./resolver/datasheetResolver";
import { AbilityResolver } from "./resolver/abilityResolver";
import { FactionResolver } from "./resolver/factionResolver";
import { WargearResolver } from "./resolver/wargearResolver";
import { graphqlErrorHandler } from "./graphqlErrorHandler";
import { BuildSchemaOptions } from "type-graphql";

export const graphqlWhtcSchema: BuildSchemaOptions = {
    resolvers: [
        AbilityResolver,
        DatasheetResolver,
        DatasheetsAbilityResolver,
        DatasheetsDamageResolver,
        DatasheetsKeywordResolver,
        DatasheetsModelResolver,
        DatasheetsOptionResolver,
        DatasheetsWargearResolver,
        FactionResolver,
        PsychicPowerResolver,
        WargearListResolver,
        WargearResolver
    ],
    // authChecker: authorizationRoleCheck,
    validate: false,
    globalMiddlewares: [
        graphqlErrorHandler
    ]
};
