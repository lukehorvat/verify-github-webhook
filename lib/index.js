import crypto from "crypto";

export default function(githubSignature, payload, secret) {
  let computedSignature = `sha1=${crypto.createHmac("sha1", secret).update(payload).digest("hex")}`;
  return crypto.timingSafeEqual(Buffer.from(githubSignature), Buffer.from(computedSignature));
}
