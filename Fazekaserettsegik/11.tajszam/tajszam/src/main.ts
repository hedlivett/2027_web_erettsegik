import { input } from "./lib/input.ts";

async function main(): Promise<void> {
  const taj: number = Number(
    await input.question("Kérem a TAJ-számot: ")
  );

  const ellenőrzőszám: number = taj % 10;

  console.log(`Az ellenőrzőszámjegy: ${ellenőrzőszám}`);

  let szám: number = Math.floor(taj / 10);
  let összeg: number = 0;

  for (let i = 8; i >= 1; i--) {
    const számjegy: number = szám % 10;
    szám = Math.floor(szám / 10);

    if (i % 2 === 1) {
      összeg += számjegy * 3;
    } else {
      összeg += számjegy * 7;
    }
  }

  console.log(`A szorzatok összege: ${összeg}`);

  if (összeg % 10 === ellenőrzőszám) {
    console.log("Helyes a szám!");
  } else {
    console.log("Hibás a szám!");
  }
}

try {
  await main();
} catch (error) {
  console.error(error);
} finally {
  input.close();
}
