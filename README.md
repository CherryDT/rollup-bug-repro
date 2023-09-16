# Bug repro steps

To reproduce the issue, please do the following:

1. Run `npm install`
2. Run `npm run repro`
3. Once the bundle is ready, open `main.js` and press "save" in your editor to trigger rebuild.

You will then see the issue happening:

```
[!] RollupError: "fromMiliseconds" is not exported by "node_modules/@walletconnect/time/dist/cjs/index.js", imported by "node_modules/@walletconnect/relay-auth/dist/esm/api.js".
https://rollupjs.org/troubleshooting/#error-name-is-not-exported-by-module
node_modules/@walletconnect/relay-auth/dist/esm/api.js (3:9)
1: import * as ed25519 from "@stablelib/ed25519";
2: import { randomBytes } from "@stablelib/random";
3: import { fromMiliseconds } from "@walletconnect/time";
            ^
4: import { JWT_IRIDIUM_ALG, JWT_IRIDIUM_TYP, KEY_PAIR_SEED_LENGTH, } from "./constants";
5: import { decodeIss, decodeJWT, encodeData, encodeIss, encodeJWT, } from "./utils";
    at error (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:353:30)
    at Module.error (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:15232:16)
    at Module.traceVariable (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:15662:29)
    at ModuleScope.findVariable (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:14109:39)
    at FunctionScope.findVariable (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:8625:38)
    at Identifier.bind (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:9818:40)
    at CallExpression.bind (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:7405:23)
    at CallExpression.bind (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:11384:15)
    at AssignmentPattern.bind (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:7405:23)
    at FunctionDeclaration.bind (/mnt/c/Users/david/proj/rollup-issue-repro/node_modules/rollup/dist/shared/rollup.js:7401:28)
```

Note: Sometimes this error complains about other exports from the same module, such as `FIVE_MINUTES`, instead of `fromMiliseconds`.
