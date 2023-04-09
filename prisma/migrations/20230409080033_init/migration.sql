-- CreateTable
CREATE TABLE "Ability" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "type" TEXT,
    "name" TEXT NOT NULL,
    "legend" TEXT,
    "is_other_wargear" BOOLEAN NOT NULL,
    "faction_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Datasheet" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "faction_id" TEXT NOT NULL,
    "source_id" INTEGER,
    "role" TEXT,
    "unit_composition" TEXT,
    "transport" TEXT,
    "power_points" TEXT,
    "priest" TEXT,
    "psyker" TEXT,
    "open_play_only" BOOLEAN NOT NULL,
    "crusade_only" BOOLEAN NOT NULL,
    "virtual" BOOLEAN NOT NULL,
    "cost" INTEGER,
    "cost_per_unit" BOOLEAN,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DatasheetsAbility" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datasheetId" INTEGER NOT NULL,
    "line" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,
    "is_index_wargear" BOOLEAN NOT NULL,
    "cost" TEXT NOT NULL,
    "model" TEXT,
    "is_other_wargear" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DatasheetsDamage" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datasheetId" INTEGER NOT NULL,
    "line" INTEGER NOT NULL,
    "col1" TEXT NOT NULL,
    "col2" TEXT NOT NULL,
    "col3" TEXT,
    "col4" TEXT,
    "col5" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DatasheetsKeyword" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datasheetId" INTEGER NOT NULL,
    "keyword" TEXT NOT NULL,
    "model" TEXT,
    "is_faction_keyword" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DatasheetsModel" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datasheet_id" INTEGER NOT NULL,
    "line" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "M" TEXT NOT NULL,
    "WS" TEXT,
    "BS" TEXT,
    "S" TEXT,
    "T" TEXT NOT NULL,
    "W" TEXT NOT NULL,
    "A" TEXT,
    "Ld" TEXT,
    "Sv" TEXT NOT NULL,
    "Cost" INTEGER,
    "cost_description" TEXT,
    "models_per_unit" TEXT,
    "cost_including_wargear" BOOLEAN NOT NULL,
    "base_size" TEXT,
    "base_size_descr" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DatasheetsOption" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datasheet_id" INTEGER NOT NULL,
    "line" INTEGER NOT NULL,
    "button" TEXT,
    "description" TEXT,
    "is_index_wargear" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DatasheetsWargear" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datasheet_id" INTEGER NOT NULL,
    "line" INTEGER NOT NULL,
    "wargear_id" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "is_index_wargear" BOOLEAN NOT NULL,
    "model" TEXT,
    "is_upgrade" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Faction" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "is_subfaction" BOOLEAN NOT NULL,
    "parent_id" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PsychicPower" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roll" INTEGER,
    "name" TEXT NOT NULL,
    "faction_id" TEXT NOT NULL,
    "faction_name" TEXT NOT NULL,
    "legend" TEXT,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Wargear" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "source_id" TEXT,
    "is_relic" BOOLEAN NOT NULL,
    "faction_id" TEXT NOT NULL,
    "faction_name" TEXT NOT NULL,
    "legend" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "WargearList" (
    "dbId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wargear_id" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "Range" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "S" TEXT NOT NULL,
    "AP" TEXT,
    "D" TEXT NOT NULL,
    "abilities" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Datasheet_id_key" ON "Datasheet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Faction_id_key" ON "Faction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PsychicPower_id_key" ON "PsychicPower"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wargear_id_key" ON "Wargear"("id");
