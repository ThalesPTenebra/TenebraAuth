-- CreateEnum
CREATE TYPE "public"."low_fats" AS ENUM ('Y', 'N');

-- CreateEnum
CREATE TYPE "public"."recyclabe" AS ENUM ('Y', 'N');

-- CreateTable
CREATE TABLE "public"."Products" (
    "product_id" INTEGER NOT NULL,
    "low_fats" "public"."low_fats" NOT NULL,
    "recyclabe" "public"."recyclabe" NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("product_id")
);
