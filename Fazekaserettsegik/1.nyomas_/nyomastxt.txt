import { input } from "./lib/input.ts";

function legkisebb(mérések: number[]): number {
  let min: number = mérések[0];

  for (const e of mérések) {
    if (e < min) {
      min = e;
    }
  }

  return min;
}

function legkisebbSorszáma(mérések: number[]): number {
  let min: number = mérések[0];
  let sorszám: number = 1;

  for (let i = 0; i < mérések.length; i++) {
    if (mérések[i] < min) {
      min = mérések[i];
      sorszám = i + 1;
    }
  }

  return sorszám;
}

function határAlattiakSzáma(mérések: number[], határ: number): number {
  let darab: number = 0;

  for (const e of mérések) {
    if (e < határ) {
      darab++;
    }
  }

  return darab;
}

function legnagyobbCsökkenés(mérések: number[]): number {
  let legnagyobb: number = 0;

  for (let i = 1; i < mérések.length; i++) {
    const csökkenés: number = mérések[i - 1] - mérések[i];

    if (csökkenés > legnagyobb) {
      legnagyobb = csökkenés;
    }
  }

  return legnagyobb;
}

async function main(): Promise<void> {
  const mérések: number[] = [865, 846, 831, 820, 808, 783, 788, 775, 752, 750, 743, 745, 758, 770];

  console.log(`A legkisebb mért érték: ${legkisebb(mérések)}`);
  console.log(`A legkisebb mérési adat sorszáma: ${legkisebbSorszáma(mérések)}`);

  const határ: number = Number(await input.question("Minél kisebb értékeket keres? (egész szám) "));

  console.log(`${határ} alatti mérések száma: ${határAlattiakSzáma(mérések, határ)}`);

  console.log(`A két mérés közötti legnagyobb csökkenés: ${legnagyobbCsökkenés(mérések)}`);
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
