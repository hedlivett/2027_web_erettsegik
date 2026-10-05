import { input } from "./lib/input.ts";

function eredmény(
  rejtett: string,
  tipp: string,
  minta: string
): string {
  let újMinta: string = "";

  for (let i = 0; i < 6; i++) {
    if (rejtett[i] === tipp[i]) {
      újMinta += tipp[i];
    } else {
      újMinta += minta[i];
    }
  }

  return újMinta;
}

function teljes(minta: string): boolean {
  return !minta.includes(".");
}

async function main(): Promise<void> {
  const szavak: string[] = [
    "fuvola",
    "csirke",
    "adatok",
    "asztal",
    "fogoly",
    "bicska",
    "farkas",
    "almafa",
    "babona",
    "gerinc",
    "dervis",
    "bagoly",
    "ecetes",
    "angyal",
    "boglya"
  ];

  const index: number = Math.floor(Math.random() * 15);
  const rejtett: string = szavak[index];

  let tippekSzáma: number = 0;
  let minta: string = "......";
  let kitalálta: boolean = false;
  let stop: boolean = false;

  while (!kitalálta && !stop) {
    const tipp: string = await input.question("Kérem a tippet: ");

    if (tipp === "stop") {
      stop = true;
    } else {
      tippekSzáma++;

      minta = eredmény(rejtett, tipp, minta);

      console.log(`Az eredmény: ${minta}`);

      if (teljes(minta)) {
        kitalálta = true;
      }
    }
  }

  if (kitalálta) {
    console.log(`${tippekSzáma} tippeléssel sikerült kitalálni.`);
  }
}

try {
  await main();
} catch (error) {
  console.error(error);
} finally {
  input.close();
}
