import { input } from "./lib/input.ts";

async function main(): Promise<void> {
  let előző: string = "";
  let lépések: number = 0;
  let vége: boolean = false;

  while (!vége) {
    const sorszám: number = lépések + 1;
    const szó: string = await input.question(`${sorszám}. szó: `);

    if (lépések === 0) {
      if (szó.length !== 6) {
        console.log("A karakterek száma téves!");
        vége = true;
      } else {
        előző = szó;
        lépések++;
      }
    } else {
      if (szó.length !== 6) {
        console.log("A karakterek száma téves!");
        vége = true;
      } else if (szó[0] !== előző[előző.length - 1]) {
        console.log("Nem illeszkedett!");
        vége = true;
      } else {
        előző = szó;
        lépések++;
      }
    }
  }

  console.log(`Helyes lépések száma: ${lépések}`);

  if (lépések <= 2) {
    console.log("Szint: kezdő");
  } else if (lépések <= 5) {
    console.log("Szint: közepes");
  } else {
    console.log("Szint: haladó");
  }
}

try {
  await main();
} catch (error) {
  console.error(error);
} finally {
  input.close();
}
