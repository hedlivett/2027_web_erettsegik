import { input } from "./lib/input.ts";

function legnagyobbÜveg(üvegek: number[]): string {
  let legnagyobb: number = üvegek[0];
  let sorszám: number = 1;

  for (let i = 0; i < üvegek.length; i++) {
    if (üvegek[i] > legnagyobb) {
      legnagyobb = üvegek[i];
      sorszám = i + 1;
    }
  }

  return `A legnagyobb üveg: ${legnagyobb} dl és ${sorszám}. a sorban.`;
}

function összesŰrtartalom(üvegek: number[]): number {
  let összeg: number = 0;

  for (const e of üvegek) {
    összeg += e;
  }

  return összeg;
}

async function main(): Promise<void> {
  const üvegek: number[] = [
    5, 2, 2, 4, 3,
    2, 4, 10, 5, 5,
    3, 5, 4, 3, 3
  ];

  console.log("2. feladat");

  const lekvár: number = Number(
    await input.question("Mari néni lekvárja (dl): ")
  );

  console.log("3. feladat");
  console.log(legnagyobbÜveg(üvegek));

  console.log("4. feladat");

  if (összesŰrtartalom(üvegek) >= lekvár) {
    console.log("Elegendő üveg volt.");
  } else {
    console.log("Maradt lekvár.");
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
