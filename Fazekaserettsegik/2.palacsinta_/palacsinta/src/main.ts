import { input } from "./lib/input.ts";

function palacsinták4000ből(árak: number[]): string {
  let vissza: string = "";

  for (const ár of árak) {
    vissza += `${Math.floor(4000 / ár)} `;
  }

  return vissza;
}

function megvettPalacsinták(árak: number[]): number[] {
  const megmaradt: number[] = [];
  let pénz: number = 4000;

  for (const ár of árak) {
    const adag: number = Math.floor(pénz / ár);
    megmaradt.push(pénz - adag * ár);
    pénz = 4000 + megmaradt[megmaradt.length - 1];
  }

  return megmaradt.map((maradék, i) => {
    const előzőPénz: number = i === 0 ? 4000 : 4000 + megmaradt[i - 1];
    return Math.floor(előzőPénz / árak[i]);
  });
}

async function main(): Promise<void> {
  const árak: number[] = [690, 730, 750, 910, 740, 810, 880, 910, 925, 885];

  console.log("2. feladat");

  const nap: number = Number(await input.question("Adja meg egy nap sorszámát! "));

  console.log(`A ${nap}. napon ${árak[nap - 1]} Ft volt egy adag palacsinta.`);

  console.log("3. feladat");
  console.log(palacsinták4000ből(árak));

  console.log("4. feladat");

  const adagok: number[] = megvettPalacsinták(árak);

  for (let i = 0; i < adagok.length; i++) {
    console.log(`A(z) ${i + 1}. napon ${adagok[i]} adag palacsintát vettek.`);
  }
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
