import { PrismaClient } from "@prisma/client";

export class PrismaService {

    // #region Singleton

    private _prisma!: PrismaClient;
    private static _instance: PrismaService;

    constructor() { this._prisma = new PrismaClient(); }

    public static get instance() { return (this._instance || (this._instance = new this())); }

    // #endregion Singleton

    //#region Public Functions

    public getClient(): PrismaClient {
        return this._prisma;
    }

    public refreshClient(): PrismaClient {
        this._prisma = new PrismaClient();
        return this._prisma;
    }

    //#endregion

}
