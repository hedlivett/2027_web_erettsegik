import { input } from "./lib/input.ts";

const MAX_DOBOZ_TÖMEG: number = 20;

function össztömeg(tárgyak: number[]): number {
  // HF kalsszikus összegzés tételével megoldani
  // összegzés a reduce() fg használatával
  // A fg. a tömb elemeit egy értékre redukálja
  // CallBack fg: (prev, current) => prev + current
  return tárgyak.reduce((prev, current) => prev + current, 0);
}

function dobozol(tárgyak: number[]): number[] {
  const dobozok: number[] = []; // dobozok súlyait tartalmazó tömb
  for (const tárgy of tárgyak) {
    const utolsóDobozIndexe = dobozok.length - 1;
    if (dobozok.length > 0 && dobozok[utolsóDobozIndexe] + tárgy <= MAX_DOBOZ_TÖMEG) {
      dobozok[utolsóDobozIndexe] += tárgy; // ha még belefér a dobozba a következő tárgy
    } else {
      dobozok.push(tárgy); // ha új dobozt kell nyitni
    }
  }
  return dobozok;
}

async function main(): Promise<void> {
  console.log("DKK - Szállítás feladat");
  const tárgyak: number[] = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2];
  const dobozok: number[] = dobozol(tárgyak);
  console.log("2. feladat");
  console.log(`A tárgyak tömegének összege: ${össztömeg(tárgyak)} kg\n`);

  console.log("3. feladat");
  console.log(`A dobozok tartalmának tömege (kg): ${dobozok.join(" ")}`);
  console.log(`A szükséges dobozok száma: ${dobozok.length}`);
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
