import { DatasheetsKeyword } from "../models/DatasheetsKeyword";
import { DatasheetsAbility } from "../models/DatasheetsAbility";
import { DatasheetsWargear } from "../models/DatasheetsWargear";
import { DatasheetsDamage } from "../models/DatasheetsDamage";
import { DatasheetsOption } from "../models/DatasheetsOption";
import { DatasheetsModel } from "../models/DatasheetsModel";
import { PsychicPower } from "../models/PsychicPower";
import { WargearList } from "../models/WargearList";
import { DataSheet } from "../models/DataSheet";
import { Wargear } from "../models/Wargear";
import { Faction } from "../models/Faction";
import { Ability } from "../models/Ability";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CsvConfig {
    name: string;
    url: string;
    classCtor: { new(): any };
    headers: string[];
    casts: { [key: string]: string };
    transactionInsertOrder: number; // Order in wich Transactions are executed (required due to FK relations)
    transactionInsertFunc: (data: any[]) => Promise<number>; // DELETE all - INSERT all TRANSACTION to update table
}

export const CsvConfigFull = new Array<CsvConfig>(
    {
        name: "Faction",
        classCtor: Faction,
        url: "https://wahapedia.ru/wh40k9ed/Factions.csv",
        headers: Object.getOwnPropertyNames(new Faction()),
        casts: ({ "isSubfaction": "boolean" }),
        transactionInsertOrder: 0,
        transactionInsertFunc: async function (data: Faction[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM Faction`;
                for (const item of data) { await tx.faction.create({ data: item }); }
                return await tx.faction.count();
            });
        }
    },
    {
        name: "PsychicPower",
        classCtor: PsychicPower,
        url: "https://wahapedia.ru/wh40k9ed/PsychicPowers.csv",
        headers: Object.getOwnPropertyNames(new PsychicPower()),
        casts: ({ "id": "number", "roll": "number" }),
        transactionInsertOrder: 1,
        transactionInsertFunc: async function (data: PsychicPower[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM PsychicPower`;
                for (const item of data) { await tx.psychicPower.create({ data: item }); }
                return await tx.psychicPower.count();
            });
        }
    },
    {
        name: "Ability",
        classCtor: Ability,
        url: "https://wahapedia.ru/wh40k9ed/Abilities.csv",
        headers: Object.getOwnPropertyNames(new Ability()),
        casts: ({ "id": "number", "isOtherWargear": "boolean" }),
        transactionInsertOrder: 2,
        transactionInsertFunc: async function (data: Ability[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM Ability`;
                for (const item of data) { await tx.ability.create({ data: item }); }
                return await tx.ability.count();
            });
        }
    },
    {
        name: "DataSheet",
        classCtor: DataSheet,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets.csv",
        headers: Object.getOwnPropertyNames(new DataSheet()),
        casts: ({ "sourceId": "number", "openPlayOnly": "boolean", "crusadeOnly": "boolean", "virtual": "boolean", "cost": "number", "costPerUnit": "boolean" }),
        transactionInsertOrder: 3,
        transactionInsertFunc: async function (data: DataSheet[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DataSheet`;
                for (const item of data) { await tx.dataSheet.create({ data: item }); }
                return await tx.dataSheet.count();
            });
        }
    },
    {
        name: "DatasheetsAbility",
        classCtor: DatasheetsAbility,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets_abilities.csv",
        headers: Object.getOwnPropertyNames(new DatasheetsAbility()),
        casts: ({ "isIndexWargear": "boolean", "isOtherWargear": "boolean" }),
        transactionInsertOrder: 4,
        transactionInsertFunc: async function (data: DatasheetsAbility[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DatasheetsAbility`;
                for (const item of data) { await tx.datasheetsAbility.create({ data: item }); }
                return await tx.datasheetsAbility.count();
            });
        }
    },
    {
        name: "DatasheetsDamage",
        classCtor: DatasheetsDamage,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets_damage.csv",
        headers: Object.getOwnPropertyNames(new DatasheetsDamage()),
        casts: ({}),
        transactionInsertOrder: 5,
        transactionInsertFunc: async function (data: DatasheetsDamage[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DatasheetsDamage`;
                for (const item of data) { await tx.datasheetsDamage.create({ data: item }); }
                return await tx.datasheetsDamage.count();
            });
        }
    },
    {
        name: "DatasheetsKeyword",
        classCtor: DatasheetsKeyword,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets_keywords.csv",
        headers: Object.getOwnPropertyNames(new DatasheetsKeyword()),
        casts: ({ "isFactionKeyword": "boolean" }),
        transactionInsertOrder: 6,
        transactionInsertFunc: async function (data: DatasheetsKeyword[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DatasheetsKeyword`;
                for (const item of data) { await tx.datasheetsKeyword.create({ data: item }); }
                return await tx.datasheetsKeyword.count();
            });
        }
    },
    {
        name: "DatasheetsModel",
        classCtor: DatasheetsModel,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets_models.csv",
        headers: Object.getOwnPropertyNames(new DatasheetsModel()),
        casts: ({ "costIncludingWargear": "boolean" }),
        transactionInsertOrder: 7,
        transactionInsertFunc: async function (data: DatasheetsModel[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DatasheetsModel`;
                for (const item of data) { await tx.datasheetsModel.create({ data: item }); }
                return await tx.datasheetsModel.count();
            });
        }
    },
    {
        name: "DatasheetsOption",
        classCtor: DatasheetsOption,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets_options.csv",
        headers: Object.getOwnPropertyNames(new DatasheetsOption()),
        casts: ({ "isIndexWargear": "boolean" }),
        transactionInsertOrder: 8,
        transactionInsertFunc: async function (data: DatasheetsOption[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DatasheetsOption`;
                for (const item of data) { await tx.datasheetsOption.create({ data: item }); }
                return await tx.datasheetsOption.count();
            });
        }
    },
    {
        name: "Wargear",
        classCtor: Wargear,
        url: "https://wahapedia.ru/wh40k9ed/Wargear.csv",
        headers: Object.getOwnPropertyNames(new Wargear()),
        casts: ({ "isRelic": "boolean" }),
        transactionInsertOrder: 9,
        transactionInsertFunc: async function (data: Wargear[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM Wargear`;
                for (const item of data) { await tx.wargear.create({ data: item }); }
                return await tx.wargear.count();
            });
        }
    },
    {
        name: "DatasheetsWargear",
        classCtor: DatasheetsWargear,
        url: "https://wahapedia.ru/wh40k9ed/Datasheets_wargear.csv",
        headers: Object.getOwnPropertyNames(new DatasheetsWargear()),
        casts: ({ "isIndexWargear": "boolean", "isUpgrade": "boolean" }),
        transactionInsertOrder: 10,
        transactionInsertFunc: async function (data: DatasheetsWargear[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM DatasheetsWargear`;
                for (const item of data) { await tx.datasheetsWargear.create({ data: item }); }
                return await tx.datasheetsWargear.count();
            });
        }
    },
    {
        name: "WargearList",
        classCtor: WargearList,
        url: "https://wahapedia.ru/wh40k9ed/Wargear_list.csv",
        headers: Object.getOwnPropertyNames(new WargearList()),
        casts: ({}),
        transactionInsertOrder: 11,
        transactionInsertFunc: async function (data: WargearList[]): Promise<number> {
            return await prisma.$transaction(async (tx) => {
                await tx.$queryRaw`DELETE FROM WargearList`;
                for (const item of data) { await tx.wargearList.create({ data: item }); }
                return await tx.wargearList.count();
            });
        }
    },
);
