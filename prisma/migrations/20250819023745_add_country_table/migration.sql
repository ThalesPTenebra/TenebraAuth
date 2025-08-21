-- CreateTable
CREATE TABLE "public"."World" (
    "name" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "population" INTEGER NOT NULL,
    "gdp" BIGINT NOT NULL,

    CONSTRAINT "World_pkey" PRIMARY KEY ("name")
);
