import { DatasheetsKeywordOutput } from "../../graphql/output/datasheetsKeywordOutput";
import { DatasheetsAbilityOutput } from "../../graphql/output/datasheetsAbilityOutput";
import { DatasheetsWargearOutput } from "../../graphql/output/datasheetsWargearOutput";
import { DatasheetsDamageOutput } from "../../graphql/output/datasheetsDamageOutput";
import { DatasheetsOptionOutput } from "../../graphql/output/datasheetsOptionOutput";
import { DatasheetsModelOutput } from "../../graphql/output/datasheetsModelOutput";
import { PsychicPowerOutput } from "../../graphql/output/psychicPowerOutput";
import { WargearListOutput } from "../../graphql/output/wargearListOutput";
import { DatasheetOutput } from "../../graphql/output/datasheetOutput";
import { WargearOutput } from "../../graphql/output/wargearOutput";
import { FactionOutput } from "../../graphql/output/factionOutput";
import { AbilityOutput } from "../../graphql/output/abilityOutput";
import { PrismaService } from "./prismaService";

export interface CsvConfig {
    name: string;
    url: string;
    classCtor: { new(): any };
    headers: string[];
    casts: { [key: string]: string };
    // DELETE all - INSERT all TRANSACTION to update table
    transactionInsertFunc: (data: any[]) => Promise<number>;
}

export class CsvConfigService {

    private static _instance: CsvConfigService;
    public static get instance() { return this._instance || (this._instance = new this()); }

    //#region  Public Functions

    public getConfig(): CsvConfig[] {
        const prisma = PrismaService.instance.getClient();
        return new Array<CsvConfig>(
            {
                name: "Ability",
                classCtor: AbilityOutput,
                url: "https://wahapedia.ru/wh40k9ed/Abilities.csv",
                headers: this.getCsvPropertyNames(AbilityOutput),
                casts: ({ "id": "number", "is_other_wargear": "boolean" }),
                transactionInsertFunc: async function (data: AbilityOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM Ability`;
                        for (const item of data) { await tx.ability.create({ data: item }); }
                        return await tx.ability.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "Datasheet",
                classCtor: DatasheetOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets.csv",
                headers: this.getCsvPropertyNames(DatasheetOutput),
                casts: ({ "id": "number", "source_id": "number", "open_play_only": "boolean", "crusade_only": "boolean", "virtual": "boolean", "cost": "number", "cost_per_unit": "boolean" }),
                transactionInsertFunc: async function (data: DatasheetOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DataSheet`;
                        for (const item of data) { await tx.datasheet.create({ data: item }); }
                        return await tx.datasheet.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "DatasheetsAbility",
                classCtor: DatasheetsAbilityOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets_abilities.csv",
                headers: this.getCsvPropertyNames(DatasheetsAbilityOutput),
                casts: ({ "datasheetId": "number", "line": "number", "ability_id": "number", "is_index_wargear": "boolean", "is_other_wargear": "boolean" }),
                transactionInsertFunc: async function (data: DatasheetsAbilityOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DatasheetsAbility`;
                        for (const item of data) { await tx.datasheetsAbility.create({ data: item }); }
                        return await tx.datasheetsAbility.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "DatasheetsDamage",
                classCtor: DatasheetsDamageOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets_damage.csv",
                headers: this.getCsvPropertyNames(DatasheetsDamageOutput),
                casts: ({ "datasheetId": "number", "line": "number" }),
                transactionInsertFunc: async function (data: DatasheetsDamageOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DatasheetsDamage`;
                        for (const item of data) { await tx.datasheetsDamage.create({ data: item }); }
                        return await tx.datasheetsDamage.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "DatasheetsKeyword",
                classCtor: DatasheetsKeywordOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets_keywords.csv",
                headers: this.getCsvPropertyNames(DatasheetsKeywordOutput),
                casts: ({ "datasheetId": "number", "is_faction_keyword": "boolean" }),
                transactionInsertFunc: async function (data: DatasheetsKeywordOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DatasheetsKeyword`;
                        for (const item of data) { await tx.datasheetsKeyword.create({ data: item }); }
                        return await tx.datasheetsKeyword.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "DatasheetsModel",
                classCtor: DatasheetsModelOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets_models.csv",
                headers: this.getCsvPropertyNames(DatasheetsModelOutput),
                casts: ({ "datasheet_id": "number", "line": "number", "Cost": "number", "cost_including_wargear": "boolean" }),
                transactionInsertFunc: async function (data: DatasheetsModelOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DatasheetsModel`;
                        for (const item of data) { await tx.datasheetsModel.create({ data: item }); }
                        return await tx.datasheetsModel.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "DatasheetsOption",
                classCtor: DatasheetsOptionOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets_options.csv",
                headers: this.getCsvPropertyNames(DatasheetsOptionOutput),
                casts: ({ "datasheet_id": "number", "line": "number", "is_index_wargear": "boolean" }),
                transactionInsertFunc: async function (data: DatasheetsOptionOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DatasheetsOption`;
                        for (const item of data) { await tx.datasheetsOption.create({ data: item }); }
                        return await tx.datasheetsOption.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "DatasheetsWargear",
                classCtor: DatasheetsWargearOutput,
                url: "https://wahapedia.ru/wh40k9ed/Datasheets_wargear.csv",
                headers: this.getCsvPropertyNames(DatasheetsWargearOutput),
                casts: ({ "datasheet_id": "number", "line": "number", "is_index_wargear": "boolean", "is_upgrade": "boolean" }),
                transactionInsertFunc: async function (data: DatasheetsWargearOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM DatasheetsWargear`;
                        for (const item of data) { await tx.datasheetsWargear.create({ data: item }); }
                        return await tx.datasheetsWargear.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "Faction",
                classCtor: FactionOutput,
                url: "https://wahapedia.ru/wh40k9ed/Factions.csv",
                headers: this.getCsvPropertyNames(FactionOutput),
                casts: ({ "is_subfaction": "boolean" }),
                transactionInsertFunc: async function (data: FactionOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM Faction`;
                        for (const item of data) { await tx.faction.create({ data: item }); }
                        return await tx.faction.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "PsychicPower",
                classCtor: PsychicPowerOutput,
                url: "https://wahapedia.ru/wh40k9ed/PsychicPowers.csv",
                headers: this.getCsvPropertyNames(PsychicPowerOutput),
                casts: ({ "roll": "number", "id": "number" }),
                transactionInsertFunc: async function (data: PsychicPowerOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM PsychicPower`;
                        for (const item of data) { await tx.psychicPower.create({ data: item }); }
                        return await tx.psychicPower.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "Wargear",
                classCtor: WargearOutput,
                url: "https://wahapedia.ru/wh40k9ed/Wargear.csv",
                headers: this.getCsvPropertyNames(WargearOutput),
                casts: ({ "is_relic": "boolean" }),
                transactionInsertFunc: async function (data: WargearOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM Wargear`;
                        for (const item of data) { await tx.wargear.create({ data: item }); }
                        return await tx.wargear.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
            {
                name: "WargearList",
                classCtor: WargearListOutput,
                url: "https://wahapedia.ru/wh40k9ed/Wargear_list.csv",
                headers: this.getCsvPropertyNames(WargearListOutput),
                casts: ({ "line": "number" }),
                transactionInsertFunc: async function (data: WargearListOutput[]): Promise<number> {
                    return await prisma.$transaction(async (tx) => {
                        await tx.$queryRaw`DELETE FROM WargearList`;
                        for (const item of data) { await tx.wargearList.create({ data: item }); }
                        return await tx.wargearList.count();
                    }, { maxWait: 5000, timeout: 20000 });
                }
            },
        );
    }

    //#endregion

    //#region Private Functions

    private getCsvPropertyNames<Type>(classCtor: { new(): Type }): string[] {
        const allProps = Object.getOwnPropertyNames(new classCtor());
        return allProps.filter(p => (p !== "dbId" && p !== "createdAt"));
    }

    //#endregion

}
