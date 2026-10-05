import { input } from "./lib/input.ts";

function irány(aktuális: number, cél: number): string {
  if (aktuális < cél) {
    return "F";
  } else if (aktuális > cél) {
    return "L";
  } else {
    return "-";
  }
}

function emeletekSzáma(
  aktuális: number,
  cél: number,
  hívó: number
): number {
  // Ha a hívó a lift aktuális útvonalán van
  if (
    (aktuális < cél && hívó > aktuális && hívó <= cél) ||
    (aktuális > cél && hívó < aktuális && hívó >= cél)
  ) {
    return Math.abs(aktuális - hívó);
  }

  // Először a célemeletre, majd a hívóhoz
  return Math.abs(aktuális - cél) + Math.abs(cél - hívó);
}

async function main(): Promise<void> {
  // 0 és 10 közötti véletlen egész számok
  const aktuális: number = Math.floor(Math.random() * 11);
  const cél: number = Math.floor(Math.random() * 11);

  console.log(
    `A lift helyzete: ${aktuális} ${irány(aktuális, cél)} (${cél})`
  );

  const hívó: number = Number(
    await input.question("Adja meg a szintet, ahonnan hívja a liftet! Szint: ")
  );

  const emeletek: number = emeletekSzáma(aktuális, cél, hívó);

  console.log(
    `A liftnek ${emeletek} emeletet kell haladnia a hívóig.`
  );
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
