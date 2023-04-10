import { gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateTime: any;
};

export type AbilityOutput = {
    __typename?: "AbilityOutput";
    createdAt: Scalars["DateTime"];
    dbId: Scalars["Int"];
    description: Scalars["String"];
    faction_id: Scalars["String"];
    id: Scalars["Int"];
    is_other_wargear: Scalars["Boolean"];
    legend?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    type?: Maybe<Scalars["String"]>;
};

export type DatasheetOutput = {
    __typename?: "DatasheetOutput";
    cost?: Maybe<Scalars["Int"]>;
    cost_per_unit?: Maybe<Scalars["Boolean"]>;
    createdAt: Scalars["DateTime"];
    crusade_only: Scalars["Boolean"];
    dbId: Scalars["Int"];
    faction_id: Scalars["String"];
    id: Scalars["Int"];
    link: Scalars["String"];
    name: Scalars["String"];
    open_play_only: Scalars["Boolean"];
    power_points?: Maybe<Scalars["String"]>;
    priest?: Maybe<Scalars["String"]>;
    psyker?: Maybe<Scalars["String"]>;
    role?: Maybe<Scalars["String"]>;
    source_id?: Maybe<Scalars["Int"]>;
    transport?: Maybe<Scalars["String"]>;
    unit_composition?: Maybe<Scalars["String"]>;
    virtual: Scalars["Boolean"];
};

export type DatasheetsAbilityOutput = {
    __typename?: "DatasheetsAbilityOutput";
    ability_id: Scalars["Int"];
    cost: Scalars["String"];
    createdAt: Scalars["DateTime"];
    datasheetId: Scalars["Int"];
    dbId: Scalars["Int"];
    is_index_wargear: Scalars["Boolean"];
    is_other_wargear: Scalars["Boolean"];
    line: Scalars["Int"];
    model?: Maybe<Scalars["String"]>;
};

export type DatasheetsDamageOutput = {
    __typename?: "DatasheetsDamageOutput";
    col1: Scalars["String"];
    col2: Scalars["String"];
    col3?: Maybe<Scalars["String"]>;
    col4?: Maybe<Scalars["String"]>;
    col5?: Maybe<Scalars["String"]>;
    createdAt: Scalars["DateTime"];
    datasheetId: Scalars["Int"];
    dbId: Scalars["Int"];
    line: Scalars["Int"];
};

export type DatasheetsKeywordOutput = {
    __typename?: "DatasheetsKeywordOutput";
    createdAt: Scalars["DateTime"];
    datasheetId: Scalars["Int"];
    dbId: Scalars["Int"];
    is_faction_keyword: Scalars["Boolean"];
    keyword: Scalars["String"];
    model?: Maybe<Scalars["String"]>;
};

export type DatasheetsModelOutput = {
    __typename?: "DatasheetsModelOutput";
    A?: Maybe<Scalars["String"]>;
    BS?: Maybe<Scalars["String"]>;
    Cost?: Maybe<Scalars["Int"]>;
    Ld?: Maybe<Scalars["String"]>;
    M: Scalars["String"];
    S?: Maybe<Scalars["String"]>;
    Sv: Scalars["String"];
    T: Scalars["String"];
    W: Scalars["String"];
    WS?: Maybe<Scalars["String"]>;
    base_size?: Maybe<Scalars["String"]>;
    base_size_descr?: Maybe<Scalars["String"]>;
    cost_description?: Maybe<Scalars["String"]>;
    cost_including_wargear: Scalars["Boolean"];
    createdAt: Scalars["DateTime"];
    datasheet_id: Scalars["Int"];
    dbId: Scalars["Int"];
    line: Scalars["Int"];
    models_per_unit?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
};

export type DatasheetsOptionOutput = {
    __typename?: "DatasheetsOptionOutput";
    button?: Maybe<Scalars["String"]>;
    createdAt: Scalars["DateTime"];
    datasheet_id: Scalars["Int"];
    dbId: Scalars["Int"];
    description?: Maybe<Scalars["String"]>;
    is_index_wargear: Scalars["Boolean"];
    line: Scalars["Int"];
};

export type DatasheetsWargearOutput = {
    __typename?: "DatasheetsWargearOutput";
    cost: Scalars["String"];
    createdAt: Scalars["DateTime"];
    datasheet_id: Scalars["Int"];
    dbId: Scalars["Int"];
    is_index_wargear: Scalars["Boolean"];
    is_upgrade: Scalars["Boolean"];
    line: Scalars["Int"];
    model?: Maybe<Scalars["String"]>;
    wargear_id: Scalars["String"];
};

export type FactionOutput = {
    __typename?: "FactionOutput";
    createdAt: Scalars["DateTime"];
    dbId: Scalars["Int"];
    id: Scalars["String"];
    is_subfaction: Scalars["Boolean"];
    link: Scalars["String"];
    name: Scalars["String"];
    parent_id?: Maybe<Scalars["String"]>;
};

export type PsychicPowerOutput = {
    __typename?: "PsychicPowerOutput";
    createdAt: Scalars["DateTime"];
    dbId: Scalars["Int"];
    description: Scalars["String"];
    faction_id: Scalars["String"];
    faction_name: Scalars["String"];
    id: Scalars["Int"];
    legend?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    roll?: Maybe<Scalars["Int"]>;
    type: Scalars["String"];
};

export type Query = {
    __typename?: "Query";
    abilities: Array<AbilityOutput>;
    ability?: Maybe<AbilityOutput>;
    datasheet?: Maybe<DatasheetOutput>;
    datasheets: Array<DatasheetOutput>;
    datasheetsAbilities: Array<DatasheetsAbilityOutput>;
    datasheetsAbility?: Maybe<DatasheetsAbilityOutput>;
    datasheetsDamage?: Maybe<DatasheetsDamageOutput>;
    datasheetsDamages: Array<DatasheetsDamageOutput>;
    datasheetsKeyword?: Maybe<DatasheetsKeywordOutput>;
    datasheetsKeywords: Array<DatasheetsKeywordOutput>;
    datasheetsModel?: Maybe<DatasheetsModelOutput>;
    datasheetsModels: Array<DatasheetsModelOutput>;
    datasheetsOption?: Maybe<DatasheetsOptionOutput>;
    datasheetsOptions: Array<DatasheetsOptionOutput>;
    datasheetsWargear?: Maybe<DatasheetsWargearOutput>;
    datasheetsWargears: Array<DatasheetsWargearOutput>;
    faction?: Maybe<FactionOutput>;
    factions: Array<FactionOutput>;
    psychicPower?: Maybe<PsychicPowerOutput>;
    psychicPowers: Array<PsychicPowerOutput>;
    wargear?: Maybe<WargearOutput>;
    wargearList?: Maybe<WargearListOutput>;
    wargearLists: Array<WargearListOutput>;
    wargears: Array<WargearOutput>;
};

export type QueryAbilitiesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryAbilityArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryDatasheetsAbilitiesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryDatasheetsAbilityArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsDamageArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsDamagesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryDatasheetsKeywordArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsKeywordsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryDatasheetsModelArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsModelsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryDatasheetsOptionArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsOptionsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryDatasheetsWargearArgs = {
    id: Scalars["Int"];
};

export type QueryDatasheetsWargearsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryFactionArgs = {
    id: Scalars["String"];
};

export type QueryFactionsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryPsychicPowerArgs = {
    id: Scalars["Int"];
};

export type QueryPsychicPowersArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryWargearArgs = {
    id: Scalars["String"];
};

export type QueryWargearListArgs = {
    id: Scalars["Int"];
};

export type QueryWargearListsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type QueryWargearsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    take?: InputMaybe<Scalars["Int"]>;
};

export type WargearListOutput = {
    __typename?: "WargearListOutput";
    AP?: Maybe<Scalars["String"]>;
    D: Scalars["String"];
    Range: Scalars["String"];
    S: Scalars["String"];
    abilities?: Maybe<Scalars["String"]>;
    createdAt: Scalars["DateTime"];
    dbId: Scalars["Int"];
    line: Scalars["Int"];
    name: Scalars["String"];
    type: Scalars["String"];
    wargear_id: Scalars["String"];
};

export type WargearOutput = {
    __typename?: "WargearOutput";
    createdAt: Scalars["DateTime"];
    dbId: Scalars["Int"];
    description?: Maybe<Scalars["String"]>;
    faction_id: Scalars["String"];
    faction_name: Scalars["String"];
    id: Scalars["String"];
    is_relic: Scalars["Boolean"];
    legend?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    source_id?: Maybe<Scalars["String"]>;
    type: Scalars["String"];
};

export type AllAbilitiesQueryVariables = Exact<{ [key: string]: never; }>;

export type AllAbilitiesQuery = { __typename?: "Query", abilities: Array<{ __typename?: "AbilityOutput", id: number, type?: string | null, name: string, legend?: string | null, is_other_wargear: boolean, faction_id: string, description: string, createdAt: any }> };

export type AllDatasheetsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsQuery = { __typename?: "Query", datasheets: Array<{ __typename?: "DatasheetOutput", id: number, name: string, link: string, faction_id: string, source_id?: number | null, role?: string | null, unit_composition?: string | null, transport?: string | null, power_points?: string | null, priest?: string | null, psyker?: string | null, open_play_only: boolean, crusade_only: boolean, virtual: boolean, cost?: number | null, cost_per_unit?: boolean | null, createdAt: any }> };

export type AllDatasheetsAbilitiesQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsAbilitiesQuery = { __typename?: "Query", datasheetsAbilities: Array<{ __typename?: "DatasheetsAbilityOutput", datasheetId: number, line: number, ability_id: number, is_index_wargear: boolean, cost: string, model?: string | null, is_other_wargear: boolean, createdAt: any }> };

export type AllDatasheetsDamagesQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsDamagesQuery = { __typename?: "Query", datasheetsDamages: Array<{ __typename?: "DatasheetsDamageOutput", datasheetId: number, line: number, col1: string, col2: string, col3?: string | null, col4?: string | null, col5?: string | null, createdAt: any }> };

export type AllDatasheetsKeywordsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsKeywordsQuery = { __typename?: "Query", datasheetsKeywords: Array<{ __typename?: "DatasheetsKeywordOutput", datasheetId: number, keyword: string, model?: string | null, is_faction_keyword: boolean, createdAt: any }> };

export type AllDatasheetsModelsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsModelsQuery = { __typename?: "Query", datasheetsModels: Array<{ __typename?: "DatasheetsModelOutput", datasheet_id: number, line: number, name: string, M: string, WS?: string | null, BS?: string | null, S?: string | null, T: string, W: string, A?: string | null, Ld?: string | null, Sv: string, Cost?: number | null, cost_description?: string | null, models_per_unit?: string | null, cost_including_wargear: boolean, base_size?: string | null, base_size_descr?: string | null, createdAt: any }> };

export type AllDatasheetsOptionsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsOptionsQuery = { __typename?: "Query", datasheetsOptions: Array<{ __typename?: "DatasheetsOptionOutput", datasheet_id: number, line: number, button?: string | null, description?: string | null, is_index_wargear: boolean, createdAt: any }> };

export type AllDatasheetsWargearsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllDatasheetsWargearsQuery = { __typename?: "Query", datasheetsWargears: Array<{ __typename?: "DatasheetsWargearOutput", datasheet_id: number, line: number, wargear_id: string, cost: string, is_index_wargear: boolean, model?: string | null, is_upgrade: boolean, createdAt: any }> };

export type AllFactionsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllFactionsQuery = { __typename?: "Query", factions: Array<{ __typename?: "FactionOutput", id: string, name: string, link: string, is_subfaction: boolean, parent_id?: string | null, createdAt: any }> };

export type AllPsychicPowersQueryVariables = Exact<{ [key: string]: never; }>;

export type AllPsychicPowersQuery = { __typename?: "Query", psychicPowers: Array<{ __typename?: "PsychicPowerOutput", roll?: number | null, name: string, faction_id: string, faction_name: string, legend?: string | null, type: string, description: string, id: number, createdAt: any }> };

export type AllWargearsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllWargearsQuery = { __typename?: "Query", wargears: Array<{ __typename?: "WargearOutput", id: string, name: string, type: string, description?: string | null, source_id?: string | null, is_relic: boolean, faction_id: string, faction_name: string, legend?: string | null, createdAt: any }> };

export type AllWargearListsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllWargearListsQuery = { __typename?: "Query", wargearLists: Array<{ __typename?: "WargearListOutput", wargear_id: string, line: number, name: string, Range: string, type: string, S: string, AP?: string | null, D: string, abilities?: string | null, createdAt: any }> };

export const AllAbilitiesDocument = gql`
    query allAbilities {
  abilities {
    id
    type
    name
    legend
    is_other_wargear
    faction_id
    description
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllAbilitiesGQL extends Apollo.Query<AllAbilitiesQuery, AllAbilitiesQueryVariables> {
    override document = AllAbilitiesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsDocument = gql`
    query allDatasheets {
  datasheets {
    id
    name
    link
    faction_id
    source_id
    role
    unit_composition
    transport
    power_points
    priest
    psyker
    open_play_only
    crusade_only
    virtual
    cost
    cost_per_unit
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsGQL extends Apollo.Query<AllDatasheetsQuery, AllDatasheetsQueryVariables> {
    override document = AllDatasheetsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsAbilitiesDocument = gql`
    query allDatasheetsAbilities {
  datasheetsAbilities {
    datasheetId
    line
    ability_id
    is_index_wargear
    cost
    model
    is_other_wargear
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsAbilitiesGQL extends Apollo.Query<AllDatasheetsAbilitiesQuery, AllDatasheetsAbilitiesQueryVariables> {
    override document = AllDatasheetsAbilitiesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsDamagesDocument = gql`
    query allDatasheetsDamages {
  datasheetsDamages {
    datasheetId
    line
    col1
    col2
    col3
    col4
    col5
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsDamagesGQL extends Apollo.Query<AllDatasheetsDamagesQuery, AllDatasheetsDamagesQueryVariables> {
    override document = AllDatasheetsDamagesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsKeywordsDocument = gql`
    query allDatasheetsKeywords {
  datasheetsKeywords {
    datasheetId
    keyword
    model
    is_faction_keyword
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsKeywordsGQL extends Apollo.Query<AllDatasheetsKeywordsQuery, AllDatasheetsKeywordsQueryVariables> {
    override document = AllDatasheetsKeywordsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsModelsDocument = gql`
    query allDatasheetsModels {
  datasheetsModels {
    datasheet_id
    line
    name
    M
    WS
    BS
    S
    T
    W
    A
    Ld
    Sv
    Cost
    cost_description
    models_per_unit
    cost_including_wargear
    base_size
    base_size_descr
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsModelsGQL extends Apollo.Query<AllDatasheetsModelsQuery, AllDatasheetsModelsQueryVariables> {
    override document = AllDatasheetsModelsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsOptionsDocument = gql`
    query allDatasheetsOptions {
  datasheetsOptions {
    datasheet_id
    line
    button
    description
    is_index_wargear
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsOptionsGQL extends Apollo.Query<AllDatasheetsOptionsQuery, AllDatasheetsOptionsQueryVariables> {
    override document = AllDatasheetsOptionsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllDatasheetsWargearsDocument = gql`
    query allDatasheetsWargears {
  datasheetsWargears {
    datasheet_id
    line
    wargear_id
    cost
    is_index_wargear
    model
    is_upgrade
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllDatasheetsWargearsGQL extends Apollo.Query<AllDatasheetsWargearsQuery, AllDatasheetsWargearsQueryVariables> {
    override document = AllDatasheetsWargearsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllFactionsDocument = gql`
    query allFactions {
  factions {
    id
    name
    link
    is_subfaction
    parent_id
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllFactionsGQL extends Apollo.Query<AllFactionsQuery, AllFactionsQueryVariables> {
    override document = AllFactionsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllPsychicPowersDocument = gql`
    query allPsychicPowers {
  psychicPowers {
    roll
    name
    faction_id
    faction_name
    legend
    type
    description
    id
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllPsychicPowersGQL extends Apollo.Query<AllPsychicPowersQuery, AllPsychicPowersQueryVariables> {
    override document = AllPsychicPowersDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllWargearsDocument = gql`
    query allWargears {
  wargears {
    id
    name
    type
    description
    source_id
    is_relic
    faction_id
    faction_name
    legend
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllWargearsGQL extends Apollo.Query<AllWargearsQuery, AllWargearsQueryVariables> {
    override document = AllWargearsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const AllWargearListsDocument = gql`
    query allWargearLists {
  wargearLists {
    wargear_id
    line
    name
    Range
    type
    S
    AP
    D
    abilities
    createdAt
  }
}
    `;

@Injectable({
    providedIn: "root"
})
export class AllWargearListsGQL extends Apollo.Query<AllWargearListsQuery, AllWargearListsQueryVariables> {
    override document = AllWargearListsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}