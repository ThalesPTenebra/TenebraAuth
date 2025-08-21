import { low_fats, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const bigCountries = await prisma.world.findMany({
    select: {
      name: true,
      population: true,
      area: true,
    },
    where: {
      OR: [
        {
          area: {
            gte: 3000000,
          },
          population: {
            gte: 25000000,
          },
        },
      ],
    },
  });

  const results = prisma.products.findMany({
    select: {
      product_id: true,
    },
    where: {
      AND: [
        {
          low_fats: "Y",
        },
        {
          recyclabe: "Y",
        },
      ],
    },
  });

  console.log(bigCountries);
}

main()
  .catch((e) => {
    console.log("Error: ", e);
  })
  .then(() => {
    console.log("finish");
  });
