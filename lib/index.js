import crypto from "crypto";

export default function(signature, payload, secret) {
  const computedSignature = `sha1=${crypto.createHmac("sha1", secret).update(payload).digest("hex")}`;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computedSignature));
}
