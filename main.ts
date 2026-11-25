// SPDX-License-Identifier: MIT
// Entrypoint: writes this competition's single family-scene text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const scene =
  "Every night my son lines up three stuffed animals, biggest first, so nobody 'sleeps alone.' He learned that from watching us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", scene, "utf8");
