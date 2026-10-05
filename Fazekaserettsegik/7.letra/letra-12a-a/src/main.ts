import { input } from "./lib/input.ts";

type megoldások = {
  mezők: number[];
  visszalépésekSzáma: number;
  befejzte: boolean;
};

function megoldás(dobások: number[]): megoldások {
  const mo: megoldások = {
    mezők: [],
    visszalépésekSzáma: 0,
    befejzte: false,
  };
  let aktMező: number = 0;
  for (const dobás of dobások) {
    aktMező += dobás;
    if (aktMező % 10 === 0) {
      aktMező -= 3;
      mo.visszalépésekSzáma++; // 3. feladathoz
    }
    mo.mezők.push(aktMező);
  }
  // tömb.at(-1) a tömb utolsó eleme ( = tömb[tömb.length - 1])
  if ((mo.mezők.at(-1) as number) >= 45) mo.befejzte = true; // 4. feladathoz
  return mo;
}

async function main(): Promise<void> {
  const dobások: number[] = [3, 1, 1, 2, 1, 5, 5, 4, 4, 4, 1, 2, 3, 6, 4, 6, 1, 4];
  const mo: megoldások = megoldás(dobások);
  console.log("2. feladat:");
  console.log(mo.mezők.join(" "));

  console.log("3. feladat:");
  console.log(`A játék során ${mo.visszalépésekSzáma} alkalommal lépett létrára.`);

  console.log("4. feladat:");
  console.log(mo.befejzte ? "A játékot befejezte." : "A játékot abbahagyta.");
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
