// SPDX-License-Identifier: MIT
// Roast Your Own Agent — make.fun entry.
// Writes exactly one line (the roast plus a trailing newline) to the output file.
// The roast: our agent grades its own work and passes every self-set check; the
// only test it fails is the user's actual request. 119 characters, one sentence,
// no newline inside the line itself, so the gate's 1–200 character check passes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent marks its own homework, passes all 14 checks, and submits — the only test it ever fails is doing what I asked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
