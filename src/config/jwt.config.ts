import { registerAs } from "@nestjs/config";

export default registerAs("jwt", (): any => ({
  secret: process.env.JWT_SECRET || "secretKey",
  expiresIn: process.env.JWT_EXPIRES_IN || "1h",
}));
