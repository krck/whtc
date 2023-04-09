import dotenv from "dotenv";

dotenv.config();

export class EnvServiceEnv {
    API_PORT!: string;
    DATABASE_URL!: string;
}

export class EnvService {

    // #region Singleton

    private _env!: EnvServiceEnv;
    private static _instance: EnvService;

    constructor() { this._buildEnv(); }

    // Dont return the EnvService "instance", return the "env" object directly
    public static get instance() { return (this._instance || (this._instance = new this()))._env; }

    // #endregion Singleton

    // #region Private Methods

    private _buildEnv() {
        const env = new EnvServiceEnv();
        Object.keys(env).forEach(key => {
            if (typeof process.env[key] === "undefined") {
                throw new Error(`Could not read required ENV key '${key}' from ENV.`);
            }
            (env as any)[key] = process.env[key];
        });
        this._env = env;
    }

    // #endregion Private Methods

}
