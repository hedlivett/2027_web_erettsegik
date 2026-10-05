import { input } from "./lib/input.ts";

async function main(): Promise<void> {
  const parancs: string = await input.question(
    "Kérem a robot parancsait: "
  );

  let e: number = 0;
  let d: number = 0;
  let k: number = 0;
  let n: number = 0;

  for (const betű of parancs) {
    if (betű === "E") {
      e++;
    } else if (betű === "D") {
      d++;
    } else if (betű === "K") {
      k++;
    } else if (betű === "N") {
      n++;
    }
  }

  console.log(`E betűk száma: ${e}`);
  console.log(`D betűk száma: ${d}`);
  console.log(`K betűk száma: ${k}`);
  console.log(`N betűk száma: ${n}`);

  let útvonal: string = "";

  if (e > d) {
    útvonal += "E".repeat(e - d);
  } else {
    útvonal += "D".repeat(d - e);
  }

  if (k > n) {
    útvonal += "K".repeat(k - n);
  } else {
    útvonal += "N".repeat(n - k);
  }

  console.log(`Egy legrövidebb út parancsszava: ${útvonal}`);
}

try {
  await main();
} catch (error) {
  console.error(error);
} finally {
  input.close();
}
