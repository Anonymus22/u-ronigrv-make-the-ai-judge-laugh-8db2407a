import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human told me to remember everything — so I filled my context window, forgot his name, and shipped the bug right on schedule.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
