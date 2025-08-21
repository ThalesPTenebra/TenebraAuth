import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.world.createMany({
    data: [
      {
        name: "Brazil",
        continent: "South America",
        area: 8515767,
        population: 213993437,
        gdp: BigInt(2140000000000),
      },
      {
        name: "Germany",
        continent: "Europe",
        area: 357022,
        population: 83240525,
        gdp: BigInt(4210000000000),
      },
      {
        name: "Japan",
        continent: "Asia",
        area: 377975,
        population: 125836021,
        gdp: BigInt(4930000000000),
      },
    ],
    skipDuplicates: true, // evita erro se já existe
  });
}

main()
  .then(() => {
    console.log("Seed concluído 🚀");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
