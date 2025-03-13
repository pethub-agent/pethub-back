import { registerAs } from "@nestjs/config";

export default registerAs("prisma", (): any => ({
  database: {
    url: process.env.DATABASE_URL,
  },
}));
