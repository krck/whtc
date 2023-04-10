// import { AuthenticatedToken } from "@utils/interfaces/authenticatedToken";
// import { AuthenticatedUser } from "../authentication/AuthenticatedUser";
import { PrismaService } from "../common/service/prismaService";
import { PrismaClient } from "@prisma/client";

export interface GraphqlWhtcContext {
    dbClient: PrismaClient;
    // authToken: AuthenticatedToken | null;
    // authUser: AuthenticatedUser | null;
}

export const getGraphqlWhtcContext = (req: any): GraphqlWhtcContext => {
    // Get the Auth0 JWT data from the express-jwt ("app.use(checkAuthToken);") middleware
    // - express-jwt expects a "authorization" header and parses/validates the request
    // - if the auth-request is valid, express-jwt will populate the req.auth property with the decoded JWT payload
    // - if the auth-request is invalid, the req.auth property will simply not exist
    //const authToken: AuthenticatedToken | null = ((req.auth !== undefined) ? req.auth : null);
    //const authUser: AuthenticatedUser | null = ((authToken !== null) ? { email: authToken.email, verified: authToken.email_verified } : null);

    // Get the User details from the DB and transfrom them into a "authenticated user" object
    // (done in the Context creation, as this user could be needed multiple times on authorization checks)
    const dbClient = PrismaService.instance.getClient();
    return { dbClient, /* authToken, authUser */ };
};
