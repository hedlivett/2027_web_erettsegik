import { input } from "./lib/input.ts";

// for-in ciklussal
export function célElérve1(cél: number, mérések: number[]): number {
  for (const i in mérések) {
    const index: number = Number(i);
    if (mérések[index] <= cél) return index + 1;
  }
  return 0; // Nem sikerült a célt elérni
}

// for-of ciklussal
export function célElérve2(cél: number, mérések: number[]): number {
  for (const [i, e] of mérések.entries()) {
    if (e <= cél) return i + 1;
  }
  return 0; // Nem sikerült a célt elérni
}

// for ciklussal
export function célElérve3(cél: number, mérések: number[]): number {
  for (let i = 0; i < mérések.length; i++) {
    if (mérések[i] <= cél) return i + 1;
  }
  return 0; // Nem sikerült a célt elérni
}

// findIndex() metódussal
export function célElérve4(cél: number, mérések: number[]): number {
  return mérések.findIndex((e) => e <= cél) + 1; // -1 + 1 => 0 nem sikerült a célt elérni
}

// forEach() metódussal
// Itt azért hibás, mert a forEach() metódusból nem lehet return-el kilépni
export function célElérve5(cél: number, mérések: number[]): number {
  mérések.forEach((e, i) => {
    if (e <= cél) return i + 1;
  });
  return -1
}

function ejnyeBejnyeHetekSzáma(mérések: number[]): number {
    let hetekSzáma: number = 0;
    for (let i = 1; i < mérések.length; i++) {
      if (mérések[i] > mérések[i - 1]) hetekSzáma++;
    }
    return hetekSzáma;
}


async function main(): Promise<void> {
  console.log("DKK - Fogyókúra feladat");
  const hetekSzáma: number = Number(await input.question("Hetek száma="));
  const célTömeg: number = Number(await input.question("Elérni kívánt testtömeg (kg)="));
  const mérések: number[] = [];
  for (let hét = 1; hét <= hetekSzáma; hét++) {
    const mértÉrték: number = Number(await input.question(`${hét}. héten=`));
    mérések.push(mértÉrték);
  }

  console.log(`Mari néni a(z) ${célElérve1(célTömeg, mérések)}. héten érte el a célt.`);
  console.log(`A tömege ${ejnyeBejnyeHetekSzáma(mérések)} esetben nőtt egyik hétről a másikra.`)

}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
