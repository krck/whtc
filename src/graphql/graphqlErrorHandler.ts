import { MiddlewareFn } from "type-graphql";

export const graphqlErrorHandler: MiddlewareFn<any> = async ({ context, info }, next) => {
    try {
        return await next();
    } catch (err: any) {
        if (err.message || err.stack) {
            const message = err.message ?? err;
            const stack = err.stack ?? "";
            throw new Error(`Message: ${message}\nStack: ${err.stack}`);
            const i = 0;
        }

        // rethrow the error
    }
};
