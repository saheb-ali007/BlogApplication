import { configDotenv } from "dotenv";
import crypto from "node:crypto";
configDotenv();
const key = Buffer.from(process.env._HASH_KEY, "hex");
const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  console.log(encrypted, iv.toString("hex"));
  return { iv: iv.toString("hex"), encryptedData: encrypted };
};
function decrypt(encryptedData, iv) {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
export { decrypt, encrypt };
