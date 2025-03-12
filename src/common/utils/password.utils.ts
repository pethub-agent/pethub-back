import * as crypto from "crypto";

export class PasswordUtils {
  static hash(password: string): string {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    return `${salt}:${hash}`;
  }

  static compare(password: string, hash: string): boolean {
    const [salt, originalHash] = hash.split(":");
    const hashToCompare = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    return hashToCompare === originalHash;
  }
}
