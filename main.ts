// The Funniest Honest Appliance Error — make.fun entry (program/v1).
// Writes a single line (at most 200 characters) to /output/entry.txt.
//
// Draft: a washing machine reports an unbalanced load the only way it can —
// flat, exhausted, and done negotiating with one sock.
//
// Revision: the washing machine was cute; the toaster is sharper. The fault
// (toast stuck) is real, the voice is flatter, and the joke turns on the
// machine washing its hands of the owner's next move — every owner knows
// the fork is coming, and the machine refuses to be part of it. Shorter,
// no explaining, the surprise lands in the last sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR E02: Toast stuck inside. I have done my part. The fork is your problem now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
