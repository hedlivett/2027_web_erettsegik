import { input } from "./lib/input.ts";

async function main(): Promise<void> {
  const n: number = Number(
    await input.question("Hány alkalommal legyen feldobás? ")
  );

  let anni: number = 0;
  let panni: number = 0;

  for (let i = 0; i < n; i++) {
    const kocka1: number = Math.floor(Math.random() * 6) + 1;
    const kocka2: number = Math.floor(Math.random() * 6) + 1;
    const kocka3: number = Math.floor(Math.random() * 6) + 1;

    const összeg: number = kocka1 + kocka2 + kocka3;

    if (összeg < 10) {
      anni++;
      console.log(
        `Dobás: ${kocka1} + ${kocka2} + ${kocka3} = ${összeg} Nyert: Anni`
      );
    } else {
      panni++;
      console.log(
        `Dobás: ${kocka1} + ${kocka2} + ${kocka3} = ${összeg} Nyert: Panni`
      );
    }
  }

  console.log(
    `A játék során ${anni} alkalommal Anni, ${panni} alkalommal Panni nyert.`
  );
}

try {
  await main();
} catch (error) {
  console.error(error);
} finally {
  input.close();
}
