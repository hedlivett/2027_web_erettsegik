import { input } from "./lib/input.ts";

const mozgásformák: Map<string, number> = new Map<string, number>([
  ["U", 1],
  ["G", 1],
  ["F", 2],
  ["K", 10],
]);

function elértTávolság(akt: string): number {
  let szumTáv: number = 0;
  for (const e of akt) {
    szumTáv += mozgásformák.get(e) || 0;
  }
  return szumTáv;
}

function jutalom10km(akt: string): boolean {
  const mozgásformákHalmaz: Set<string> = new Set<string>();
  for (const e of akt) {
    if (mozgásformák.has(e)) mozgásformákHalmaz.add(e);
  }
  return mozgásformákHalmaz.size === 4;
}

function jutalomSzöveg(jutalomJár: boolean): string {
  return jutalomJár ? "Bravó! Jutalma még 10km." : "Nem jár jutalom.";
}

function kihívásÉrtékelése(elértKm: number): string {
  return elértKm >= 40 ? "Gratulálok, kihívás teljesítve!" : "Legközelebb sikerül!";
}

async function main(): Promise<void> {
  console.log("1. feladat");
  const aktivitás: string = await input.question("Adja meg az aktivitást: ");

  console.log("2. feladat");
  let elértTáv: number = elértTávolság(aktivitás);
  console.log(`Az elért távolság: ${elértTáv} km.`);

  console.log("3. feladat");
  const jutalomJár: boolean = jutalom10km(aktivitás);
  console.log(jutalomSzöveg(jutalomJár));

  console.log("4. feladat");
  elértTáv += jutalomJár ? 10 : 0;
  console.log(`Eredménye: ${elértTáv} km. ${kihívásÉrtékelése(elértTáv)}`);
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
