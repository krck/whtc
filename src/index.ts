// TypeGraphQL: reflect-metadata shim is required to make the type reflection work
import "reflect-metadata";

import express, { Express, Request, Response } from "express";
import { getGraphqlWhtcContext } from "./graphql/graphqlWhtcContext";
import { graphqlWhtcSchema } from "./graphql/graphqlWhtcSchema";
import { EnvService } from "./common/service/envService";
import { dataRouter } from "./router/dataRouter";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import helmet from "helmet";
import cors from "cors";

// Init app
const app = express();
const port = EnvService.instance.API_PORT;
if (!port) {
    process.exit(1);
}

// Mount the middleware functions
// HELMET: Disables the `contentSecurityPolicy` middleware but keeps the rest - needed for "express-graphiql" to work
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());

// ------------------------------
// ----- ADD AUTHENTICATION -----
// ------------------------------

async function bootstrap() {
    // API GraphQL route configuration ('express-graphql' middleware)
    const schema = await buildSchema(graphqlWhtcSchema);
    app.use(
        "/graphql",
        graphqlHTTP((req, res, graphQLParams) => {
            return {
                schema: schema,
                context: getGraphqlWhtcContext(req),
                graphiql: { headerEditorEnabled: true },
                pretty: true
            };
        })
    );

    // Controller routes
    app.use("/api/data", dataRouter);
    // Simple test route
    app.get("/check", async (req: Request, res: Response) => { res.status(200).send("whtc-api: ok"); });

    // Start the Express server
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`[whtc-api]: GraphQL Endpoint: http://localhost:${port}/graphql`);
        // eslint-disable-next-line no-console
        console.log(`[whtc-api]: Database Update:  http://localhost:${port}/api/data/update`);
    });
}
bootstrap();
