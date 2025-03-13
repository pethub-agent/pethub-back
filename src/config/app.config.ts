import { registerAs } from "@nestjs/config";

export default registerAs("app", (): any => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
}));
