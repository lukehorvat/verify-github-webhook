# verify-github-webhook [![NPM version](http://img.shields.io/npm/v/verify-github-webhook.svg?style=flat-square)](https://www.npmjs.org/package/verify-github-webhook)

Safely verify that a received webhook originated from GitHub.

Uses [crypto.timingSafeEqual()](https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b), so Node.js v6.6.0 (or newer) is required.

## Installation

Install the package with NPM:

```bash
$ npm install verify-github-webhook
```

## Usage

Example:

```js
import verifyGithubWebhook from "verify-github-webhook";

let signature = "sha1=9060bd6ce771054d94628879bb47095ec2572c86";
let payload = JSON.stringify({ hello: "world" });
let secret = "secret";

verifyGithubWebhook(signature, payload, secret); // Returns true/false.
```
