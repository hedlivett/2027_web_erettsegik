import { input } from "./lib/input.ts";

function összesKerékpáros(áthaladás: number[]) {
  let összes: number = 0;
  for (const e of áthaladás) {
    if (e !== -1) összes += e;
  }
  return összes;
}

function statisztika(áthaladás: number[]): Map<number, number> {
  const stat: Map<number, number> = new Map<number, number>([
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
  ]);
  for (let i = 0; i < áthaladás.length; i++) {
    const óra: number = 6 + Math.floor(i / 4);
    const aktÉrték: number = stat.get(óra)!;
    if (áthaladás[i] !== -1) {
      stat.set(óra, aktÉrték + áthaladás[i]);
    }
  }
  return stat;
}

function statisztikaSzövege(stat: Map<number, number>): string {
  let vissza: string = "";
  for (const [kulcs, érték] of stat) {
    vissza += `${kulcs} órától ${érték} kerékpáros\n`;
  }
  return vissza;
}

function maximum(áthaladás: number[]): string {
  let max: number = 0;
  let maxIndex: number = 0;

  for (let i = 0; i < áthaladás.length; i++) {
    if (áthaladás[i] > max) {
      max = áthaladás[i];
      maxIndex = i;
    }
  }

  const óra: number = 6 + Math.floor(maxIndex / 4);
  const perc: number = ((maxIndex % 4) + 1) * 15;

  return `Az áthaladók maximális száma: ${max}; a rögzítés időpontja: ${óra}:${perc}`;
}

async function main(): Promise<void> {
  const áthaladás: number[] = [36, 48, 39, -1, 30, 43, -1, 76, 67, 82, 73, 75, 64, 73, 69, 63];
  console.log("2. feladat");
  console.log(`Összesen ${összesKerékpáros(áthaladás)} kerékpárost számoltak.`);

  console.log("3. feladat\nÓránkénti mérések:");
  console.log(statisztikaSzövege(statisztika(áthaladás)));

  console.log("4.feladat");
  console.log(maximum(áthaladás));
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
